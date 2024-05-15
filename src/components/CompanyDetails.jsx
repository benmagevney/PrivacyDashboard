import CompanyDetailItem from "./CompanyDetailItem";

const CompanyDetails = () => {

    return (
        <div className="p-5 bg-white rounded-2xl shadow h-64 w-4/12 flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold text-darkGray">Company Breakdown</h2>
                {/* <Tooltip
                    title="Privacy Score"
                    text="The privacy score is a measure of how well a company is protecting user data." /> */}
            </div>
            <div className="ml-5 mr-2">
                <CompanyDetailItem title="Total Breaches" metric="2" />
                <CompanyDetailItem title="Avgerage Days to Respond" metric="20 days" />
                <CompanyDetailItem title="Washingtonians Affected" metric="100,000" />
                <CompanyDetailItem title="Unique Information Breached" metric="9 items" />
            </div>

        </div>
    )
};

export default CompanyDetails;