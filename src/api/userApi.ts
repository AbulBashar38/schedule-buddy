import { doc, DocumentData, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Auth/firebaseConfig";
import { IStoreData } from "../utils/interface";


export const storeUserData = async ({ data, collectionName,customId }: IStoreData) => {
    const docRef = doc(db, collectionName, customId);
  return await setDoc(docRef, data);
};
export const getUserById = async (userId: string): Promise<DocumentData> => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return Promise.resolve(docSnap.data());
    } else {
      console.log("No such document!");
      return Promise.reject("data not found"); // Or handle this case as needed
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
