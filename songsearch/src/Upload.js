import React from 'react';

export function Upload(props) {
    return (
        <main>
            <div className="ms-5">
                <form>
                    <label className = "text-light px-1 py-1" for="fname">Artist: </label>
                    <input type="text" id="fname" name="fname" /><br></br>
                    <label className = "text-light px-1 py-1" for="lname">Song: </label>
                    <input type="text" id="lname" name="lname" /><br></br>
                    <label className = "text-light px-1 py-1" for="lname">Album: </label>
                    <input type="text" id="lname" name="lname" /><br></br>
                    <p className = "text-light" >Please select the genre of your work. If none of the below applies, select "Others".</p>
                    <input type="checkbox" id="genre1" name="genre1" />
                    <label className = "text-light" for="genre1">Hip-Hop/Rap</label><br></br>
                    <input type="checkbox" id="genre2" name="genre2" />
                    <label className = "text-light" for="genre2">Country</label><br></br>
                    <input type="checkbox" id="genre3" name="genre3" />
                    <label className = "text-light" for="genre3">Jazz</label><br></br>
                    <input type="checkbox" id="genre4" name="genre4" />
                    <label className = "text-light" for="genre4">Dance</label><br></br>
                    <input type="checkbox" id="genre5" name="genre5" />
                    <label className = "text-light" for="genre5">Latin</label><br></br>
                    <input type="checkbox" id="genre6" name="genre6" />
                    <label className = "text-light" for="genre6">Classical</label><br></br>
                    <input type="checkbox" id="genre7" name="genre7" />
                    <label className = "text-light" for="genre7">Electro</label><br></br>
                    <input type="checkbox" id="genre8" name="genre8" />
                    <label className = "text-light" for="genre8">Punk</label><br></br>
                    <input type="checkbox" id="genre9" name="genre9" />
                    <label className = "text-light" for="genre9">Others</label><br></br>
                    <input type="submit" />
                </form>
            </div>
        </main>
    )
}