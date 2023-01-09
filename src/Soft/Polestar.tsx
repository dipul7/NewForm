import { Container, TabOne } from "./style";
import Img from "./../Images/logo.png";

export const Polestar = () => {
  return (
    <>
      <Container>
        {" "}
        <nav className="navbar">
          <span className="img">
            {" "}
            <img src={Img} />
          </span>
          Neerja Associates
        </nav>
      </Container>

      <TabOne>
        <div className="tab_container">
          <input
            className="inputnew"
            id="tab1"
            type="radio"
            name="tabs"
            checked
          />
          <label className="label1" htmlFor="tab1">
            <i className="fa fa-code"></i>
            <span>Details</span>
          </label>

          <input className="inputnew" id="tab2" type="radio" name="tabs" />
          <label className="label1" htmlFor="tab2">
            <i className="fa fa-pencil-square-o"></i>
            <span>List</span>
          </label>

          <input className="inputnew" id="tab3" type="radio" name="tabs" />
          <label className="label1" htmlFor="tab3">
            <i className="fa fa-bar-chart-o"></i>
            <span>Services</span>
          </label>

          <section id="content1" className="tab-content">
            <Container>
              <div className="container">
                <h1>Details Form</h1>
                <div className="dropdownmain">
                  {" "}
                  <label className="dropdown">
                    <div className="dd-button">Dropdown</div>

                    <input type="checkbox" className="dd-input" id="test" />

                    <ul className="dd-menu">
                      <li>Action</li>
                      <li>Another action</li>
                      <li>Something else here</li>
                      <li className="divider"></li>
                    </ul>
                  </label>
                </div>
                <form id="contact" action="" method="post">
                  <h2>
                    <b>Center Details</b>
                  </h2>
                  <span className="flex">
                    <fieldset>
                      <div className="label-float">
                        <input type="number" placeholder=" " />
                        <label>Phone</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        {" "}
                        <input placeholder=" " type="text" required />{" "}
                        <label>Short Name</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="text" placeholder=" " />
                        <label> Contact Person</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="text" placeholder=" " />
                        <label> Address 1</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="text" placeholder=" " />
                        <label> Address 2</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="text" placeholder=" " />
                        <label> Address 3</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <select>
                        <option>City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                      </select>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="number" placeholder=" " required />
                        <label> PinCode</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="number" placeholder=" " />
                        <label> Phone</label>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div className="label-float">
                        <input type="email" placeholder=" " required />
                        <label> Email</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <select>
                        <option>State</option>
                        <option value="Delhi">MP</option>
                        <option value="Pune">UP</option>
                        <option value="Chennai">HP</option>
                      </select>
                    </fieldset>{" "}
                    <fieldset>
                      <select>
                        <option>District</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                      </select>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input type="number" placeholder=" " required />
                        <label> No. of Beds</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <select>
                        <option>PickUp Days</option>
                        <option value="Delhi">Today</option>
                        <option value="Pune">Tomorrow</option>
                        <option value="Chennai">Other Day</option>
                      </select>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input
                          type="date"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          onChange={(e) => console.log(e.target.value)}
                          placeholder=" "
                        />
                        <label> Aggrement Start Date</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <div className="label-float">
                        <input
                          type="date"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          onChange={(e) => console.log(e.target.value)}
                          placeholder=" "
                        />
                        <label> Aggrement End Date</label>
                      </div>
                    </fieldset>{" "}
                    <fieldset>
                      <select>
                        <option>Login Status</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </select>
                    </fieldset>{" "}
                    <fieldset>
                      Self Scanning
                      <input type="checkbox" required />
                    </fieldset>{" "}
                  </span>
                </form>
                <span className="grid">
                  <form id="details" action="" method="post">
                    <h2>
                      <b>Details Of Pollution</b>
                    </h2>
                    <span className="flex2">
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Unique ID</label>
                        </div>
                      </fieldset>{" "}
                      <fieldset>
                        <select>
                          <option>Category</option>
                          <option value="Category">Category A</option>
                          <option value="Category">Category B</option>
                          <option value="Category">Category C</option>
                        </select>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Code</label>
                        </div>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Login ID</label>
                        </div>
                      </fieldset>
                    </span>
                  </form>
                  <form id="details" action="" method="post">
                    <h2>
                      <b>Collection Details</b>
                    </h2>
                    <span className="flex">
                      <fieldset>
                        <select>
                          <option>Type</option>
                          <option value="TypeA">Type A</option>
                          <option value="TypeB">Type B</option>
                          <option value="TypeC">Type C</option>
                        </select>
                      </fieldset>{" "}
                      <fieldset>
                        <select>
                          <option>Route</option>
                          <option value="RouteA">Route A</option>
                          <option value="RouteB">Route B</option>
                          <option value="RouteC">Route C</option>
                        </select>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Waste Limit</label>
                        </div>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Collection Status</label>
                        </div>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Latitude</label>
                        </div>
                      </fieldset>{" "}
                      <fieldset>
                        <div className="label-float">
                          <input type="text" placeholder=" " />
                          <label> Langitude</label>
                        </div>
                      </fieldset>{" "}
                    </span>
                  </form>
                </span>
                <span className="buttonDiv">
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Save / Add
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Validity
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Password
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Mail For Password
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Print List
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Regenarate
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Delete
                    </button>
                  </fieldset>{" "}
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      HCF QR Code
                    </button>
                  </fieldset>
                </span>
              </div>
            </Container>
          </section>

          <section id="content2" className="tab-content">
            <p>List of Hospitals</p>
          </section>

          <section id="content3" className="tab-content">
            <p>Services we Provide</p>
          </section>
        </div>
      </TabOne>
    </>
  );
};
