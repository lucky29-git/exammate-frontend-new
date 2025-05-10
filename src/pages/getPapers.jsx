import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
import { Loader } from '../components/ui/loader';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '../components/ui/pagination';
import { FileText } from 'lucide-react';
import subjectData from '../assets/subjectData';

const PAGE_SIZE = 10;

const getSemesters = () => Array.from({ length: 8 }, (_, i) => (i + 1).toString());

const GetPapers = () => {
  const location = useLocation();
  const branch = location.state?.branch || '';
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState({});
  const [loading, setLoading] = useState(false);
  const [papers, setPapers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (branch && semester) {
      const subjObj = subjectData[branch]?.[semester] || {};
      setSubjects(subjObj);
      setSubject('');
    }
  }, [branch, semester]);

  const handleGetPyq = async () => {
    setLoading(true);
    setPapers([]);
    console.log(branch, semester, subject);
    try {
      const res = await axios.post('https://exammate-backend-b011.onrender.com/paper', {
        branch,
        semester,
        subject,
      });
      console.log(branch, semester, subject);
      setPapers(res.data.value || []);
    } catch (err) {
      setPapers([]);
    }
    setLoading(false);
    setPage(1);
  };

  const paginatedPapers = papers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasMore = papers.length > page * PAGE_SIZE;

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 to-slate-200 py-8 px-2 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <header className="mb-8 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Get all PYQ Papers and download them</h2>
          <p className="text-muted-foreground text-base md:text-lg">Select your branch, semester, and subject to find previous year question papers.</p>
        </header>
        <div className="w-full md:max-w-3xl bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-6 mb-10">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="text-base font-semibold text-muted-foreground">Branch</div>
            <div className="text-xl font-bold text-primary mt-1">{branch}</div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-center">
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                {getSemesters().map((sem) => (
                  <SelectItem key={sem} value={sem}>{sem}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={subject} onValueChange={setSubject} disabled={!semester}>
              <SelectTrigger className="w-60">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(subjects).map(([subjKey, subjFull]) => (
                  <SelectItem key={subjKey} value={subjKey}>{subjFull}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleGetPyq} disabled={!branch || !semester || !subject || loading} className="h-10 px-6 text-base font-semibold">
              {loading ? <Loader /> : 'Get PYQ'}
            </Button>
          </div>
        </div>
        <div className="w-full md:max-w-3xl bg-white rounded-xl shadow p-6">
          {loading && <div className="flex justify-center py-8"><Loader /></div>}
          {!loading && paginatedPapers.length > 0 && (
            <div>
              <ul className="divide-y divide-muted">
                {paginatedPapers.map((paper) => (
                  <li key={paper._id} className="flex items-center justify-between py-4 px-2 hover:bg-slate-50 rounded transition">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary" size={28} />
                      <span className="font-medium text-lg">{paper.title}</span>
                    </div>
                    <a href={paper.files} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="font-semibold">Download</Button>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} />
                    </PaginationItem>
                    <PaginationItem>
                      <span className="px-2 text-base">Page {page}</span>
                    </PaginationItem>
                    {hasMore && (
                      <PaginationItem>
                        <PaginationNext onClick={() => setPage((p) => p + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
          {!loading && papers.length === 0 && (
            <div className="text-center text-muted-foreground mt-8 text-lg">No papers found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetPapers;
