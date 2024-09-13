import { getInitials } from "../../utils/helper";

const ProfileInfo=({onLogout})=>{
  return(
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full
      text-slate-950 font-medium bg-slate-100">{getInitials("John William")}</div>
      <div>
        <p>John William</p>
        <button className="text-sm text-slate-600 underline hover:text-slate-500" onClick={onLogout} >Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfo;