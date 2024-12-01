export function NotificationComponent({count}){
    return (
        <div style={{display:"flex"}}>
            <img src="https://www.svgrepo.com/show/31480/notification-bell.svg" 
                style={{width:20, height:20}}
            />
            {count!= undefined && count > 0 && count}
        </div>
    )
}