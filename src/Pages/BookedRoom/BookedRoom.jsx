

const BookedRoom = () => {
    return (
        <form action="">
            <div className="form-group">
                <h2 className="heading">Booking & contact</h2>
                <div className="controls">
                    <input type="text" id="name" className="floatLabel" name="name" />
                    <label >Name</label>
                </div>
                <div className="controls">
                    <input type="text" id="email" className="floatLabel" name="email" />
                    <label  >Email</label>
                </div>
                <div className="controls">
                    <input type="tel" id="phone" className="floatLabel" name="phone" />
                    <label >Phone</label>
                </div>
                <div className="grid">
                    <div className="col-2-3">
                        <div className="controls">
                            <input type="text" id="street" className="floatLabel"
                                name="street" />
                            <label  >Street</label>
                        </div>
                    </div>
                    <div className="col-1-3">
                        <div className="controls">
                            <input type="number" id="street-number"
                                className="floatLabel" name="street-number" />
                            <label >Number</label>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-2-3">
                        <div className="controls">
                            <input type="text" id="city"
                                className="floatLabel" name="city" />
                            <label  >City</label>
                        </div>
                    </div>
                    <div className="col-1-3">
                        <div className="controls">
                            <input type="text" id="post-code"
                                className="floatLabel" name="post-code" />
                            <label  >Post Code</label>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <input type="text" id="country" className="floatLabel" name="country" />
                    <label  >Country</label>
                </div>
            </div>

            <div className="form-group">
                <h2 className="heading">Details</h2>
                <div className="grid">
                    <div className="col-1-4 col-1-4-sm">
                        <div className="controls">
                            <input type="date" id="arrive" className="floatLabel"
                                name="arrive" value="<?php echo date('Y-m-d'); ?>" />
                            <label className="label-date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;Arrive</label>
                        </div>
                    </div>
                    <div className="col-1-4 col-1-4-sm">
                        <div className="controls">
                            <input type="date" id="depart" className="floatLabel"
                                name="depart" value="<?php echo date('Y-m-d'); ?>" />
                            <label className="label-date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;Depart</label>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-1-3 col-1-3-sm">
                        <div className="controls">
                            <i className="fa fa-sort"></i>
                            <select className="floatLabel">
                                <option value="blank"></option>
                                <option value="1">1</option>
                                <option value="2" selected>2</option>
                                <option value="3">3</option>
                            </select>
                            <label  ><i className="fa fa-male"></i>&nbsp;&nbsp;People</label>
                        </div>
                    </div>
                    <div className="col-1-3 col-1-3-sm">
                        <div className="controls">
                            <i className="fa fa-sort"></i>
                            <select className="floatLabel">
                                <option value="blank"></option>
                                <option value="deluxe" selected>With Bathroom</option>
                                <option value="Zuri-zimmer">Without Bathroom</option>
                            </select>
                            <label >Room</label>
                        </div>
                    </div>

                    <div className="col-1-3 col-1-3-sm">
                        <div className="controls">
                            <i className="fa fa-sort"></i>
                            <select className="floatLabel">
                                <option value="blank"></option>
                                <option value="single-bed">Zweibett</option>
                                <option value="double-bed" selected>Doppelbett</option>
                            </select>
                            <label >Bedding</label>
                        </div>
                    </div>

                </div>
                <div className="grid">
                    <p className="info-text">Please describe your needs e.g. Extra beds, children`s cots</p>
                    <br />
                    <div className="controls">
                        <textarea name="comments" className="floatLabel" id="comments"></textarea>
                        <label >Comments</label>
                    </div>
                    <button type="submit" value="Submit" className="col-1-4">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default BookedRoom;
