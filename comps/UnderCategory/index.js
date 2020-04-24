import React from 'react';
import './under.css';

const UnderCategory = ({ text, color, onClick }) => <div
    style={{ backgroundColor: color, boxShadow: "0 0 6px" + color }}
    className="UnderCategory-Box"
    onClick={onClick}
>
    <div className="UnderCategory-Box-Inner">
        <div className="Note">
            <div className="Note-Date">
                <div className="Note-Title">
                    Note Title
        </div>
                <div className="Date-Created">
                    12.07.2020 - 12:00
        </div>
            </div>

            <div className="Note-Preview">Note preview...</div>
        </div>

        <div className="Under-Divider"></div>

        <div className="Note">
            <div className="Note-Date">
                <div className="Note-Title">
                    Note Title
        </div>
                <div className="Date-Created">
                    12.07.2020 - 12:00
        </div>
            </div>

            <div className="Note-Preview">Note preview...</div>
        </div>

    </div>
</div>

UnderCategory.defaultProps = {
    color: "#FFFFFF",
}

export default UnderCategory;