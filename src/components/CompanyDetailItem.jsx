const CompanyDetailItem = ({ title, metric }) => {

    return (
        <div className="flex justify-between mt-5">
            <p className="">{title}</p>
            <p className="">{metric}</p>
        </div>
    )

}

export default CompanyDetailItem;