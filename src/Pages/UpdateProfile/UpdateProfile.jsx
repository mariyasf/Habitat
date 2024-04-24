
const UpdateProfile = () => {
    return (
        <div>
            <button className="btn bg-[#0EA5E9] text-white"
                onClick={() => document.getElementById('book_modal').showModal()}>
                Book Now
            </button>

            <dialog id="book_modal" className="modal text-left">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Place Your Room Booking</h3>

                    <form action="" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room Number</span>
                            </label>
                            <input type="number" placeholder="Number of rooms" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Adults</span>
                            </label>
                            <input type="number" placeholder="Number of Adults" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Childrens</span>
                            </label>
                            <input type="number" placeholder="Number of Childrens" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateProfile;