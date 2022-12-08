import React from 'react';
import { NavLink } from 'react-router-dom';


export function HomePage(props) {

    return(


        <main className='container'>
        <section className="recommend card">
                    <div className="contents" id="topsongs">
                        <h3> Top Songs of the day </h3>


                        <ol className="list-group list-group-flush list-group-numbered">
                            <li className="list-group-item bg-transparent">Infiite Ammo - Le Castle Vania</li>
                            <li className="list-group-item bg-transparent">Dance Monkey - Tones and I</li>
                            <li className="list-group-item bg-transparent">Blinding Lights - The Weekend</li>
                            <li className="list-group-item bg-transparent">I Don't Care - Ed Sheeran</li>
                            <li className="list-group-item bg-transparent">Mother - Charlie Puth</li>
                            <li className="list-group-item bg-transparent">Higher Lover - Kygo</li>
                            <div className="text-center">
                            <NavLink to="/recent"><input className="btn btn-dark my-3" type="submit" value="Browse More..." /></NavLink>
                            </div>
                        </ol>
                    </div>

                </section>

                <section className="Search card">
                    <div className="contents">
                        <h3> Looking for a quick song?</h3>
                    </div>

                    <div className="px-1 py-3">
                        <select className="form-select" aria-label="Default select" placeholder='Genre'>
                            <option selected disabled> Genre </option>
                            <option value="1"> Hip-Hop/Rap </option>
                            <option value="2"> EDM </option>
                            <option value="3"> Country </option>
                            <option value="4"> Jazz </option>
                            <option value="5"> Electro </option>
                        </select>
                    </div>
                    
                    
                    <div className="px-1 py-3">
                        <select className="form-select" aria-label="Default select">
                            <option selected disabled> Energy Level? </option>
                            <option value="1"> Low </option>
                            <option value="2"> Medium </option>
                            <option value="3"> High</option>
                        </select>
                    </div>

                    <div className="px-1 py-3">
                        <select className="form-select" aria-label="Default select">
                            <option selected disabled> Duration? </option>
                            <option value="1"> Short(&gt;3mins) </option>
                            <option value="2"> Medium (Between 3 and 5) </option>
                            <option value="3"> Long(&gt;5mins) </option>
                        </select>
                        <img className="musicNote" src="/img/musicNote.png" alt="A picture of a music note" />
                    </div>

                    <NavLink to="/search" className="d-grid gap-2 no_underline"> <input className="btn btn-dark" type="submit" value="Search" /> </NavLink>

                </section>

                <section className="artist card">
                    <div className="art-contents">
                        <h3> Are you an artist? </h3>

                        <p> Sign-in or make an account to</p>
                        <p> reach whole new audiences!  </p>
                        <img src="/img/DJBoard.jpg" alt="A picture of a DJ board" />
                        <p className="img-cite"><cite><a href="https://unsplash.com/photos/YrtFlrLo2DQ"> Marcela Laskoski </a></cite></p>


                    </div>

                    <div className="art-button py-3">
                        <NavLink to="/login"><button type="button" className="btn btn-dark">Log-in/Sign-Up</button></NavLink>
                    </div>
                    
                </section>
      </main>

    )
}
