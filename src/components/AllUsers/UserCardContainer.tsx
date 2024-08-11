import { IUserCardContainerProps } from "../../utils/interface";

const UserCardContainer = ({ userData }: IUserCardContainerProps) => {
    return (
        <div className="card bg-base-100 w-60 shadow-xl">
            <figure className="pt-5">
                <img
                    src={userData.img}
                    alt="Shoes"
                    className="rounded-full w-[6em]" />
            </figure>
            <div className="card-body items-center text-center pt-5">
                <h2 className="card-title">{userData.name}</h2>
                <p className='text-[12px]'>Email: {userData.email}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary ">Make an appointment</button>
                </div>
            </div>
        </div>
    );
}

export default UserCardContainer;