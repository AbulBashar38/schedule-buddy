import { IUserCardContainerProps } from "../../utils/interface";
import Modal from "../shared/Modal";
import AppointmentModal from "./AppointmentModal";

const UserCardContainer = ({ userData }: IUserCardContainerProps) => {
    const handleAppointmentBtnClick = () => {
        const modal = document.getElementById(`appointment_modal_${userData.id}`);
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        } else {
            console.error('Modal not found or is not a dialog element');
        }
    }
    return (
        <div className="card bg-base-100 w-60 shadow-xl">
            <figure className="pt-5">
                <img
                    src={userData.profilePicture}
                    alt="Shoes"
                    className="rounded-full w-[6em]" />
            </figure>
            <div className="card-body items-center text-center pt-5">
                <h2 className="card-title">{userData.name}</h2>
                <p className='text-[12px]'>Email: {userData.email}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary " onClick={handleAppointmentBtnClick}> Make an appointment</button>
                </div>
            </div>
            <Modal id={`appointment_modal_${userData.id}`}>
                <AppointmentModal userId={userData.id} />
            </Modal>
        </div>
    );
}

export default UserCardContainer;