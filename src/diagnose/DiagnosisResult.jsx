import PropTypes from 'prop-types';

const DiagnosisResult = ({ diagnosis, treatment, medicines, guidance }) => {
    return (
        <div
            style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '20px', marginBottom: '8px' }}>
                Diagnosis
            </h3>
            <p style={{ color: 'red', fontFamily: 'Arial, sans-serif', fontSize: '16px', margin: '8px 0' }}>
                <strong>Disease:</strong> {diagnosis || 'N/A'}
            </p>
            <p style={{ color: '#555', fontFamily: 'Arial, sans-serif', fontSize: '16px', margin: '8px 0' }}>
                <strong>Treatment:</strong> {treatment || 'N/A'}
            </p>
            <p style={{ color: '#555', fontFamily: 'Arial, sans-serif', fontSize: '16px', margin: '8px 0' }}>
                <strong>Medicines:</strong> {medicines || 'N/A'}
            </p>
            <p style={{ color: '#555', fontFamily: 'Arial, sans-serif', fontSize: '16px', margin: '8px 0' }}>
                <strong>Guidance:</strong> {guidance || 'N/A'}
            </p>
        </div>
    );
};

DiagnosisResult.propTypes = {
    diagnosis: PropTypes.string,
    treatment: PropTypes.string,
    medicines: PropTypes.string,
    guidance: PropTypes.string,
};

DiagnosisResult.defaultProps = {
    diagnosis: 'Unknown',
    treatment: 'N/A',
    medicines: 'N/A',
    guidance: 'N/A',
};

export default DiagnosisResult;
