document.write(`
    <center>
        <form id="userForm">
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="inter your name" required>
    
            <label for="job">Age</label>
            <input type="number" id="age" placeholder="inter your age" required>

            <label for="services">Select country</label>
        <select id="services" name="services">
        <option value="" selected disabled>country</option>
        <option id="SeOp" value="Egypt">Egypt</option>
        <option id="SeOp" value="Saudia">Saudia arabia</option>
        <option id="SeOp" value="Germany">Germany</option>
        </select>
    
            <label for="job">Your Job Name</label>
            <input type="text" id="job" placeholder="inter your job" required>
    
            <label for="skills">Your Skills</label>
            <input type="text" id="skills" placeholder="inter your skills" required>
            <button type="submit" id="sbmt">Make</button>
        </form>
    </center>
    
        <div id="output"></div>
    `)
    
    document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        let userName = document.getElementById("name").value;
        let userAge = document.getElementById("age").value;
        let userC = document.getElementById("SeOp").value
        let userJob = document.getElementById("job").value;
        let userSkills = document.getElementById("skills").value.split(" ");
        let markUp = `
                    <title>Sphinx | Your information</title>
                    <link rel="stylesheet" href="styles.css">
                        <header>
        <h1 class="f-h1">welcome to</h1>
        <img class="f-icon-img" src="imgs/sphinx  png.png" alt="sphinximg">
    </header>
        <div class="user-card">
            <center>
            <h2>${userName}</h2>
                <p>${userJob}</p>
                <h3>Your age ${userAge}</h3>
                <h2>Your Country: ${userC}</h2>
                <h2>Skills :</h2>
                <ul>
                ${userSkills.map(skill => `<li>${skill.trim()}</li>`).join("")}
                </ul>
                            <form
            action="https://formspree.io/f/mpwqqrav"
            method="POST"
            >   
                <input class="hidden-inputs" type="text" value="${userName}" name="user-name">
                <input class="hidden-inputs" type="number" value="${userAge}" name="user-age">
                <input class="hidden-inputs" type="text" value="${userJob}" name="user-job">
                <input class="hidden-inputs" type="text" value="${userSkills} name="user-skills">
                <input class="hidden-inputs" type="text" value="${userC} name="user-Country">
                <input type="submit" value="send">
                </form>
                </center>
        </div>
        `;
            let markUp2 = `
            <title>Sphinx | Your information</title>
            <link rel="stylesheet" href="styles.css">
                <header>
        <h1 class="f-h1">welcome to</h1>
        <img class="f-icon-img" src="imgs/sphinx  png.png" alt="sphinximg">
    </header>
        <div class="user-card">
        <center>
        <h2>MR:${userName}</h2>
        <p>${userJob}</p>
        <h3>Your age ${userAge}</h3>
        <h2>Your Country: ${userC}</h2>
        <h2>Skills :</h2>
        <ul>
        ${userSkills.map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>
                        <form
            action="https://formspree.io/f/mpwqqrav"
            method="POST"
            >   
            <input class="hidden-inputs" type="text" value="${userName}" name="user-name">
            <input class="hidden-inputs" type="number" value="${userAge}" name="user-age">
            <input class="hidden-inputs" type="text" value="${userJob}" name="user-job">
            <input class="hidden-inputs" type="text" value="${userSkills} name="user-skills">
            <input type="submit" value="send">
            </form>
        </center>
        </div>
        `;
        if (userAge < 33 && userAge > 18) {
            document.write(markUp)
        }
        
        if (userAge < 18 || userAge > 45) {
            document.write(`
                <link rel="stylesheet" href="styles.css">
                <title>Sphinx | Your information</title>
                    <header>
        <h1 class="f-h1">welcome to</h1>
        <img class="f-icon-img" src="imgs/sphinx  png.png" alt="sphinximg">
    </header>
                <div class="error-age" id="er-age">
                <div class="error-message">
                        <h2 id="er-age"> sorry ${userName} your age is not avelable</h2>
                    </div>
                </div>`
            
            )
        }
    
        if (userAge < 45 && userAge > 33) {
            document.write(markUp2)
        }
    
    });
    
    
    // if i want viwe 2 things in thes bage >> document.getElementById("output").innerHTML = markUp;
    
    
