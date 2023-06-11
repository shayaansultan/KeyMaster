import React from "react";

const MainPage = () => {
    return (
        <div>
            <h1 className="text-4xl 
            font-bold underline
            flex items-center justify-center
            p-4">
                KeyMaster
            </h1>

            {/* Add a Generate Password Button which looks nice */}            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">
                Generate Password
            </button>

        </div>
    );
}

export default MainPage;