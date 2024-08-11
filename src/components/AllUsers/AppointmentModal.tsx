const AppointmentModal = () => {
    return (
        <section>
            <form method="dialog" className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary">Make an appointment</h1>
                <button className="btn btn-sm btn-circle btn-ghost hover:bg-[#EFF3FF]">✕</button>
            </form>
            <div className="mt-5 flex flex-col gap-5">
                <div className="from-control">
                    <label className=" flex items-center gap-2 text-lg mb-2">
                        Appointment Title :
                    </label>
                    <input type="text" placeholder="Write your title here" className="input input-bordered w-full " />
                </div>
                <div className="from-control">
                    <label className=" flex items-center gap-2 text-lg mb-2">
                        Description :
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Write your description here"></textarea>
                </div>
                <div className="flex justify-between">
                    <div className="from-control">
                        <label className=" flex items-center gap-2 text-lg mb-2">
                            Date :
                        </label>
                        <input type="text" placeholder="Select date" className="input input-bordered w-full " />
                    </div>
                    <div className="from-control">
                        <label className=" flex items-center gap-2 text-lg mb-2">
                            Time :
                        </label>
                        <input type="text" placeholder="Select time" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control mt-5">
                    <button className="btn btn-primary text-white">Confirm</button>
                </div>
            </div>

        </section>
    );
}

export default AppointmentModal;