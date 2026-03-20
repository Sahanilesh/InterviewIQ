import React, { useState } from 'react'
import SetUp from '../components/Interviews/SetUp'
import Interview from '../components/Interviews/Interview'
import Report from '../components/Interviews/Report'

function InterviewPage() {
    const [step, setStep] = useState(1)
    const [interviewData, setInterviewData] = useState(null)
    return (
        <div className='min-h-screen bg-gray-50'>
            {step === 1 && (
                <SetUp onStart={(data) =>{
                    setInterviewData(data);
                    setStep(2)
                }}/>
            )}
            {step === 2 && (
                <Interview interveiwData={interviewData}
                onFinish={(report) =>{setInterviewData(report);
                    setStep(3)
                }}/>
            )}
            {step === 3 && (
                <Report report={interviewData}/>
            )}

        </div>
    )
}

export default InterviewPage
