import { useState } from 'react';
import symptomData from './symptomData';
import DiagnosisResult from './DiagnosisResult';

const DiagnosisForm = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [result, setResult] = useState(null);
    const [temp, setTemp] = useState('');

    const addSymptom = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setSymptoms([...symptoms, e.target.value.trim()]);
            e.target.value = '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let diagnosis = 'No matching disease found';
        let treatment = '';
        let medicines = '';
        let guidance = '';

        for (const data of symptomData) {
            const matchingSymptoms = data.symptoms.map((s) => s.toLowerCase());
            if (symptoms.every((symptom) => matchingSymptoms.includes(symptom.toLowerCase()))) {
                diagnosis = data.disease;
                treatment = data.treatment;
                medicines = data.medicines.join(', ');
                guidance = data.guidance;
                break;
            }
        }

        setResult({ diagnosis, treatment, medicines, guidance });
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Medical Diagnosis Form
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Temperature:</label>
                    <div className="flex space-x-2 mt-2">
                        <button
                            type="button"
                            data-value="Low"
                            className={`btn-option ${temp === 'Low' ? 'active' : ''}`}
                            onClick={() => setTemp('Low')}
                        >
                            Low
                        </button>
                        <button
                            type="button"
                            data-value="Medium"
                            className={`btn-option ${temp === 'Medium' ? 'active' : ''}`}
                            onClick={() => setTemp('Medium')}
                        >
                            Medium
                        </button>
                        <button
                            type="button"
                            data-value="High"
                            className={`btn-option ${temp === 'High' ? 'active' : ''}`}
                            onClick={() => setTemp('High')}
                        >
                            High
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Symptoms:</label>
                    <input
                        type="text"
                        className="w-full mt-2 p-2 border rounded"
                        placeholder="Type a symptom and press Enter"
                        onKeyPress={addSymptom}
                    />
                    <div className="flex flex-wrap mt-2">
                        {symptoms.map((symptom, index) => (
                            <span
                                key={index}
                                className="symptom-tag"
                            >
                                {symptom}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Diagnose
                </button>
            </form>

            {result && <DiagnosisResult {...result} />}
        </div>
    );
};

export default DiagnosisForm;
