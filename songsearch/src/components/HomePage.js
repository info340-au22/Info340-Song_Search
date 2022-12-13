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

                <section className="search card">
                    <div className="contents mb-3">
                        <h3> Looking for a specific song?</h3>
                        <img className="musicNote" src="/img/searchHeadphones.jpg" alt="headphones over a background of clocks and timers" />
                        <p className="img-cite"><cite><a href="https://www.phillymag.com/be-well-philly/2020/09/16/ritual-monthly-playlist/"> Westend61, Caroline Cunningham </a></cite></p>
                    </div>

                    <NavLink to="/search" className="d-grid gap-2 no_underline"> <input className="btn btn-dark" type="submit" value="Search" /> </NavLink>

                </section>

                <section className="artist card">
                    <div className="art-contents">
                        <h3> Are you an artist? </h3>

                        <p> Sign-in or make an account to</p>
                        <p> reach whole new audiences!  </p>
                        <img src="/img/DJBoard.jpg" alt="A DJ board" />
                        <p className="img-cite"><cite><a href="https://unsplash.com/photos/YrtFlrLo2DQ"> Marcela Laskoski </a></cite></p>


                    </div>

                    <div className="art-button py-3">
                        <NavLink to="/login"><button type="button" className="btn btn-dark">Login / Sign Up</button></NavLink>
                    </div>

                </section>
      </main>

    )
}
