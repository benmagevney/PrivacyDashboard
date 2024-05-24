import './App.css';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import { readExcel } from './utils/dataUtils';
function App() {
  // all data
  const [excelData, setExcelData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [scoreData, setScoreData] = useState(null);

  // selected company
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companyData, setCompanyData] = useState(null);
  const [companyAnalysis, setCompanyAnalysis] = useState(null);
  const [companyScore, setCompanyScore] = useState(null);

  useEffect(() => {
    const fecthData = async () => {
      const data = await readExcel('/data.xlsx');
      setExcelData(data);
      const analysis = await readExcel('/analysis.xlsx');
      setAnalysisData(analysis);
      const scores = await readExcel('/privacy_scores.xlsx');
      setScoreData(scores);
    }

    fecthData();
  }, []);

  const companyNames = excelData ? excelData.map((company) => company['Organization Name']) : [];
  const uniqueCompanyNames = [...new Set(companyNames)];

  useEffect(() => {
    if (excelData) {
      const data = excelData.filter((company) => company['Organization Name'] === selectedCompany);
      setCompanyData(data);
    }
    if (analysisData) {
      const data = analysisData.filter((company) => company['Organization Name'] === selectedCompany);
      setCompanyAnalysis(data);
    }
    if (scoreData) {
      const data = scoreData.filter((company) => company['Organization Name'] === selectedCompany);
      setCompanyScore(data[0] !== undefined ? data[0]['Privacy Score'] : 0);
    }

  }, [selectedCompany, excelData, analysisData, scoreData]);

  return (
    <div>
      <NavBar searchQuery={selectedCompany} setSearchQuery={setSelectedCompany} companyNames={uniqueCompanyNames} />
      <Dashboard companyData={companyData} companyAnalysis={companyAnalysis} companyScore={companyScore} />
    </div>
  );
}

export default App;
