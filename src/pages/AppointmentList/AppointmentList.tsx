import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../stateManagement/hooks";
import { getAllAppointments } from "../../stateManagement/appointments/appointmentsSlice";
import dayjs from "dayjs";

const AppointmentList = () => {
    const dispatch = useAppDispatch()
    const appointments = useAppSelector((state) => state.appointments)
    console.log(appointments);

    useEffect(() => {
        dispatch(getAllAppointments())
    }, [dispatch])
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

                        {appointments?.allAppointments?.map((appointment, i) => <tr key={i}>
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
                                <div className="badge capitalize bg-[#ffebdd] text-[#FD9A56] border-none">
                                    {appointment.status}
                                </div>

                            </td>
                            <td>
                                {appointment.status}
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
                        pageCount={15}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        onPageChange={() => { }}
                        renderOnZeroPageCount={null}
                    // forcePage={forcePage}
                    />
                </div>
            </div>
        </section>
    </main>);
}

export default AppointmentList;