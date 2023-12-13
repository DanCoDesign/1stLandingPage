
function Step({ title, text, lastStep }) {
    return (
        <>
            <div className="flex flex-col lg:justify-left lg:text-left max-w-[255px]">
                <div className="flex flex-row w-full justify-center lg:justify-between ">
                    <div className="flex w-6 h-6 bg-[#2E4FD7] rounded-full">
                    </div>
                    {!lastStep ? (
                        <div className="hidden lg:flex text-right text-[#2E4FD7] tracking-[0.25rem]">
                            ---------------
                        </div>
                    ) : ""}
                </div>

                <h3 className="pt-4 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">{title}</h3>
                <p className="py-2 text-regular text-gray-700  dark:text-gray-300">{text}</p>
            </div>
        </>
    )
}

const ProcessSteps = () => {
    return (


        <div className="flex flex-col text-center lg:text-left mb-16 space-y-16">
            <h3 className="mt-16 font-bold text-2xl leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">The process we follow</h3>
            <div className="relative grid grid-cols-1 text-center place-items-center lg:place-items-start gap-y-12 md:grid-cols-4 gap-x-12 ">
                <Step title="Ideate" text="Turn your idea from conecpt to MVP" />
                <Step title="Design" text="Sketch out the product to align the user needs" />
                <Step title="Develop" text="Convert the designs into a live application" />
                <Step title="Deploy" text="Launching the application to the market" lastStep="true" />
            </div>
        </div>
    );
}

export default ProcessSteps;