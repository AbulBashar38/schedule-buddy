import { Ref, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../stateManagement/hooks";
import { getAllAppointments, updateAppointmentStatus } from "../../stateManagement/appointments/appointmentsSlice";
import dayjs from "dayjs";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
import Modal from "../../components/shared/Modal";
import ConfirmationModal from "../../components/shared/ConfirmationModal";
import { FaCalendarCheck } from "react-icons/fa";
import { appointmentStatus } from "../../utils/interface";
import clsx from "clsx";
import { MdCancel, MdFreeCancellation } from "react-icons/md";
import { TbCalendarCancel } from "react-icons/tb";
interface ISelectedData { id: string, status: appointmentStatus }
const AppointmentList = () => {
    const [selectedInfo, setSelectedInfo] = useState<ISelectedData>({ id: '', status: appointmentStatus.pending })
    const dispatch = useAppDispatch()
    const appointments = useAppSelector((state) => state.appointments)
    console.log(appointments);

    useEffect(() => {
        dispatch(getAllAppointments())
    }, [dispatch])
    const handleConfirmationModalOpen = (data: ISelectedData) => {
        setSelectedInfo(data)
        const modal = document.getElementById('confirmation');
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        } else {
            console.error('Modal not found or is not a dialog element');
        }

    }

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = appointments?.allAppointments?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(appointments?.allAppointments?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        console.log({ event });

        const newOffset = (event.selected * itemsPerPage) % appointments?.allAppointments.length;
        setItemOffset(newOffset);
    };
    return (<main>
        <section className="flex justify-between items-center py-10 px-10">
            <h3 className="text-[16px] font-semibold text-primary">Appointment list</h3>
            <div className="flex gap-2">
                <select className="select select-primary w-full max-w-xs ">
                    <option selected>Status</option>
                    <option>Pending</option>
                    <option>Approved</option>
                </select>
                <button className="btn btn-primary btn-outline">Upcoming Appointments</button>
                <button className="btn btn-primary btn-outline">Past Appointments</button>
                <label className="input input-bordered input-primary flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search by name" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
        </section>
        <section className="px-10">
            <div className="overflow-x-auto bg-white rounded-[1em]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date</th>
                            <th>Appointment Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {currentItems?.map((appointment, i) => <tr key={i}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={appointment.toUser.profilePicture}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{appointment.toUser.name}</div>
                                        <div className="text-sm opacity-50">{appointment.toUser.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {dayjs(appointment.date).format('MMM D, YYYY h:mm A')}
                            </td>
                            <td>{appointment.title.substring(0, 20)}</td>
                            <td>
                                {appointment.description.substring(0, 30)}
                            </td>
                            <td>
                                <div className={clsx("badge capitalize  border-none font-semibold",
                                    appointment.status === appointmentStatus.pending && 'bg-[#ffe7d5] text-[#ff9752]',
                                    appointment.status === appointmentStatus.approved && 'bg-[#d6ffd2] text-[#5cc351]',
                                    appointment.status === appointmentStatus.canceled && 'bg-[#ffd8e8] text-[#c11f21]',
                                )}>
                                    {appointment.status}
                                </div>

                            </td>
                            <td>
                                {appointment.status === appointmentStatus.canceled ? <></> : <div className="flex gap-2">
                                    <button onClick={() => handleConfirmationModalOpen({ id: appointment.id, status: appointmentStatus.approved })} className="btn btn-sm bg-transparent hover:bg-green-50 hover:border-green-200">
                                        <IoMdCheckboxOutline size={16} className="text-green-600" />
                                    </button>
                                    <button onClick={() => handleConfirmationModalOpen({ id: appointment.id, status: appointmentStatus.canceled })} className="btn btn-sm bg-transparent hover:bg-red-50 hover:border-red-200">
                                        <RiDeleteBinLine size={16} className="text-red-500 " />
                                    </button>
                                </div>}
                            </td>
                        </tr>)}
                    </tbody>
                    {/* foot */}

                </table>
                <div className="flex my-5 w-full justify-center">
                    <ReactPaginate
                        containerClassName="join rounded-none"
                        pageLinkClassName="join-item btn btn-md bg-transparent hover:bg-[#EFF3FF]"
                        activeLinkClassName="btn-active !bg-primary text-white hover:text-white"
                        disabledLinkClassName="btn-disabled"
                        previousLinkClassName="join-item btn btn-md bg-transparent hover:bg-[#EFF3FF]"
                        nextLinkClassName="join-item btn btn-md bg-transparent hover:bg-[#EFF3FF]"
                        breakLinkClassName="join-item btn btn-md bg-transparent hover:bg-[#EFF3FF]"
                        previousLabel="<"
                        nextLabel=">"
                        breakLabel="..."
                        pageCount={pageCount}

                        pageRangeDisplayed={1}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageClick}
                        renderOnZeroPageCount={null}
                    // forcePage={forcePage}
                    />
                </div>
            </div>
        </section>
        <Modal id="confirmation" closeOutSideClick className="w-[25em]">
            <ConfirmationModal
                message={
                    selectedInfo.status === appointmentStatus.canceled ?
                        'Are you sure want to cancel the Appointment?'
                        : 'Do you want to Approved?'}
                icon={
                    selectedInfo.status === appointmentStatus.canceled ?
                        <MdFreeCancellation className="text-error" size={40} />
                        : <FaCalendarCheck className="text-primary" size={40} />
                }
                cancelBtnText={'Cancel'}

                confirmBtnText={selectedInfo.status === appointmentStatus.canceled ? 'Confirm' : 'Approved'}

                iconClass={selectedInfo.status === appointmentStatus.canceled ? "bg-red-50" : ""}
                confirmBtnClass={selectedInfo.status === appointmentStatus.canceled ? "btn-error" : ""}

                handleConfirmClick={(ref: Ref<HTMLButtonElement | null>) => {
                    dispatch(updateAppointmentStatus({ id: selectedInfo.id, data: { status: selectedInfo.status } }))
                    if (ref) {
                        ref?.current?.click()
                    }
                }}

                handleCancelClick={(ref: Ref<HTMLButtonElement | null>) => {
                    setSelectedInfo({ id: '', status: appointmentStatus.pending })
                    if (ref) {
                        ref?.current?.click()
                    }
                }}
            />
        </Modal>
    </main>);
}

export default AppointmentList;