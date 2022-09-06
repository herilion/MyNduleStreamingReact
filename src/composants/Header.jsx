import React from "react";
import { useDataLayervalue } from "../DataLayer";
const Header = () => {
    const [{ user }, dispatch] = useDataLayervalue()
    return (
        <div className="header">
            <div>
                <input
                    placeholder="Search for artists"
                    type="text" />
            </div>
            <div>
                <img src={user?.images[0]?.url} alt="" />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    );
}

export default Header;