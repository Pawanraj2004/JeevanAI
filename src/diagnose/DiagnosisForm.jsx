import { useState } from 'react';
import symptomData from './symptomData';
import DiagnosisResult from './DiagnosisResult';

const DiagnosisForm = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [results, setResults] = useState([]);

    const addSymptom = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            e.preventDefault(); // Prevent form submission
            const newSymptom = e.target.value.trim();
            if (!symptoms.includes(newSymptom)) {
                setSymptoms([...symptoms, newSymptom]);
            }
            e.target.value = '';
        }
    };

    const removeSymptom = (symptomToRemove) => {
        setSymptoms(symptoms.filter((symptom) => symptom !== symptomToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const matches = symptomData.filter((data) =>
            symptoms.some((symptom) =>
                data.symptoms.map((s) => s.toLowerCase()).includes(symptom.toLowerCase())
            )
        );

        setResults(matches.length > 0 ? matches : [{ disease: 'No matching disease found' }]);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Medical Diagnosis Form
                </h1>

                <form onSubmit={handleSubmit} className="text-center">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 text-lg font-medium">Symptoms:</label>
                        <input
                            type="text"
                            className="w-full mt-2 p-3 border rounded-lg text-lg"
                            placeholder="Type a symptom and press Enter"
                            onKeyPress={addSymptom}
                        />
                        <div className="flex flex-wrap mt-4 justify-center">
                            {symptoms.map((symptom, index) => (
                                <span
                                    key={index}
                                    className="bg-green-500 text-white py-2 px-4 rounded-full text-sm font-medium mr-2 mb-2 cursor-pointer"
                                    onClick={() => removeSymptom(symptom)}
                                    title="Click to remove this symptom"
                                >
                                    {symptom} &times;
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700"
                    >
                        Diagnose
                    </button>
                </form>

                {results.length > 0 && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                            Diagnosis Results
                        </h2>
                        {results.map((result, index) => (
                            <DiagnosisResult
                                key={index}
                                diagnosis={result.disease}
                                treatment={result.treatment}
                                medicines={result.medicines?.join(', ')}
                                guidance={result.guidance}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosisForm;
