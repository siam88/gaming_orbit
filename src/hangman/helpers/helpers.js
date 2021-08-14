export const ShowNotification=(setter)=>{
    setter(true);

    setTimeout(() => {
        setter(false)
    }, 2000);
}