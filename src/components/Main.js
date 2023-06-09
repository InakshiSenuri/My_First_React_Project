import React from "react"

export default function Main() {
    return (
        <main>
             <div className="body--heading-div" >
                <h1 className="body--title">Fun facts about React</h1>
            </div>
            <div className="body--content">
                <ul className="body--list" >
                    <li className="body--list-element">Was first released in 2013</li>
                    <li className="body--list-element">Was originally created by Jordan Walke</li>
                    <li className="body--list-element">Has well over 100K stars on GitHub</li>
                    <li className="body--list-element">Is maintained by Facebook</li>
                    <li className="body--list-element">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
       
    )
}