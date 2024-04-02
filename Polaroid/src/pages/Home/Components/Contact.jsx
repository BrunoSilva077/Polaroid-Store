export default function Contact() {
    return (
        <>
            <div className="new-arrivals tittle">
                <h3>Contact</h3>
            </div>
            <div className="grid-container contact">
                <div className="item item2"></div>
                <div className="item item8">
                    <form>
                        <div className="form-contact flex-col">
                            <input type="text" placeholder="Name" maxLength={20} />
                            <input type="email" placeholder="Email" maxLength={20} />
                            <input type="text" placeholder="Tittle" maxLength={20} />
                            <textarea placeholder="Text" maxLength={500}></textarea>
                            <button className="btn btn-contact">Send</button>
                        </div>
                    </form>
                </div>
                <div className="item item2"></div>
            </div>
        </>
    )
}
