import React, { useState } from "react";
import "./SubjectWiseNotes.css"; // Ensure you create a CSS file for styling

const subjects = [
  { name: "Data Structures & Algorithms", category: "Computer Science" },
  { name: "Operating Systems", category: "Computer Science" },
  { name: "DBMS", category: "Computer Science" },
  { name: "Computer Networks", category: "Computer Science" },
  { name: "Linear Algebra", category: "Mathematics" },
  { name: "Probability & Statistics", category: "Mathematics" },
  { name: "Digital Logic Design", category: "Electronics & Communication" },
];

export const SubjectWiseNotesMainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="subject-notes-container">
      <h1>Subject Wise Notes</h1>
      <p>Find well-organized notes for each subject to help you study efficiently.</p>

      {/* Search Bar */}
        {/* INSTEAD OF THIS SEARCH BAR..THAT FILTER OPTION WILL COME AND ALL THE SUBJECTS AS WELL */}
      <input
        type="text"
        placeholder="Search for subjects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Subjects Grid */}
      <h2>Popular Searches</h2>
      <div className="subjects-grid">
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject, index) => (
            <div key={index} className="subject-card">
              <h3>{subject.name}</h3>
              <p>Category: {subject.category}</p>
              <button className="view-notes-btn">View Notes</button>
            </div>
          ))
        ) : (
          <p>No subjects found.</p>
        )}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <p>Want to contribute? <a href="#">Upload Your Notes</a></p>
        <p>Need specific notes? <a href="#">Request Here</a></p>
      </div>
    </div>
  );
};
