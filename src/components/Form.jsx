import classes from "./Form.module.css";

const Form =()=>{
return <div className={classes.form_card}>
    <h1>Send a message to us!</h1>
    <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="Message" rows="4" placeholder=""></textarea>
        <button>Send</button>

    </form>
</div>
}


export default Form