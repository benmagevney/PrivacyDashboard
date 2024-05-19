const DataRow = ({ title, metric, icon }) => {

    return (
        <div className="flex justify-between mt-5 items-center">
            <div className="flex items-center">
                {icon && <img src={icon} alt="icon" className="w-5 h-5 mr-5" />}
                <p className="">{title}</p>
            </div>
            <p className="">{metric}</p>
        </div>
    )

}

export default DataRow;