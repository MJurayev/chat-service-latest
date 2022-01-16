import './SidebarLoading.css'
export default function SidebarLoading({visible}) {
    const visibleStyle = {
        opacity:visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition:visible ? "" : "opacity .4s ease-in-out, visibility .4s ease-in-out"
    }
    return (
        <div style={visibleStyle} className="sidebarLoading">
            <div className="sidebarLoading__loader">
                <div className="sidebarLoading__loader2"></div>
            </div>
        </div>
    )
}   
