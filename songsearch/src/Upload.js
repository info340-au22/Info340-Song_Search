import React from 'react';

export function Upload(props) {
    return (
        <main>
            <div class="container-upload"></div>
                <form>
                    <label for="fname">Artist:</label>
                    <input type="text" id="fname" name="fname"><br><br>
                    <label for="lname">Song:</label>
                    <input type="text" id="lname" name="lname"><br><br>
                    <label for="lname">Album:</label>
                    <input type="text" id="lname" name="lname"><br><br>
                    <p>Please select the genre of your work. If none of the below applies, select "Others".</p>
                    <input type="checkbox" id="genre1" name="genre1">
                    <label for="genre1">Hip-Hop/Rap</label><br><br>
                    <input type="checkbox" id="genre2" name="genre2">
                    <label for="genre2">Country</label><br><br>
                    <input type="checkbox" id="genre3" name="genre3">
                    <label for="genre3">Jazz</label><br><br>
                    <input type="checkbox" id="genre4" name="genre4">
                    <label for="genre4">Dance</label><br><br>
                    <input type="checkbox" id="genre5" name="genre5">
                    <label for="genre5">Latin</label><br><br>
                    <input type="checkbox" id="genre6" name="genre6">
                    <label for="genre6">Classical</label><br><br>
                    <input type="checkbox" id="genre7" name="genre7">
                    <label for="genre7">Electro</label><br><br>
                    <input type="checkbox" id="genre8" name="genre8">
                    <label for="genre8">Punk</label><br><br>
                    <input type="checkbox" id="genre9" name="genre9">
                    <label for="genre9">Others</label><br><br>
                    <input type="submit">
                </form>
            </div>
        </main>
    )
}