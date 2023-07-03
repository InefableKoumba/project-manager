import { GlobalState, ProjectInterface, REQUEST_LINKS } from "../context/AppStateContext";

export const saveData = async (payload: GlobalState)=>{
    try {
        const response = await fetch(`http://localhost:1337/save`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        console.log(response.json());
    } catch (error) {
        console.log(error);
    }
    console.log(process.env.NODE_ENV)
}

export const loadData = async(link: REQUEST_LINKS ) => {
    try {
        const data= await fetch(`http://localhost:1337/${link}`)
        const response = await data.json() ;
        return response as ProjectInterface[]
    } catch (error) {
        throw new Error();
    }
}
