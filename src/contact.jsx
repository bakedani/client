//contact.jsx, Dani Baker, 301070844, September 26th 2024
import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> First Name:</label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                    <label htmlFor="myPhone"> Phone number: </label>
				<input type="" id="myPhone" name="myPhone" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p>email: bakerdanielle623@gmail.com</p>
          <p>Other methods of contact available upon email request</p>
     </>
     );
     }
    