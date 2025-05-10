// { value: '1', label: 'Semester 1', subjects: ['FOCSE', 'basic computer eng'] },
//     { value: '2', label: 'Semester 2', subjects: ['chemistry', 'electrical'] },
//     { value: '3', label: 'Semester 3', subjects: ['data structures', 'cso', 'dcd', 'discrete structure', 'edc'] },
//     { value: '4', label: 'Semester 4', subjects: ['ADA', 'ADC', 'Microprocessor', 'TOC'] },
//     { value: '5', label: 'Semester 5', subjects: ['DBMS', 'OS', 'DC','Cyber Security', 'CGM','Essence of Indian Traditional Knowledge'] },
//     { value: '6', label: 'Semester 6', subjects: ['ACA', 'CN', 'OOAD','PM','PPL'] },
//     { value: '7', label: 'Semester 7', subjects: ['Compiler design', 'Information Storage Management', 'IOT', 'Network Security', 'Software Engg'] },
//     { value: '8', label: 'Semester 8', subjects: ['Network Management', 'Soft Computing', 'Web Engineering'] },
const subjectData = {
  CSE: {
    '1': {
      'FOCSE': 'FOCSE',
      'basic computer eng': 'basic computer eng'
    },
    '2': {
      'chemistry': 'Chemistry',
      'electrical': 'Electrical',
    },
    '3': {
      'data structures': 'Data Structures',
      'discrete structure': 'Discrete Structure',
      'dcd': 'Digital Circuit Design',
      'cso': 'Computer System Organization',
      'edc': 'Electric design circuit',
    },
    '4': {
      'ADA': 'ADA',
      'ADC': 'ADC',
      'Microprocessor': 'Microprocessor',
      'TOC': 'Theory of Computation',
    },
    '5': {
      'DBMS': 'Database Management Systems',
      'OS': 'Operating Systems',
      'DC': 'Digital Circuit  ',
      'Cyber Security': 'Cyber Security',
      'CGM': 'Computer Graphics and Multimedia',
      'Essence of Indian Traditional Knowledge': 'Essence of Indian Traditional Knowledge',
    },
    '6': {
      'ACA': 'ACA',
      'CN': 'Computer Networks',
      'OOAD': 'OOAD',
      'PM': 'PM',
      'PPL': 'PPL',
    },
    '7': {
      'Compiler Design': 'Compiler Design',
      'Information Storage Management': 'Information Storage Management',
      'IOT': 'IOT',
      'Network Security': 'Network Security',
      'Software Engg': 'Software Engineering',
    },
    '8': {
      'Network Management': 'Network Management',
      'Soft Computing': 'Soft Computing',
      'Web Engineering': 'Web Engineering',
    }
  },
  IT: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Data Structures': 'Data Structures',
      'Digital Logic': 'Digital Logic',
      'Discrete Mathematics': 'Discrete Mathematics',
    },
    '4': {
      'OOP': 'OOP',
      'Computer Organization': 'Computer Organization',
      'Operating Systems': 'Operating Systems',
    },
    '5': {
      'DBMS': 'DBMS',
      'Design and Analysis of Algorithms': 'Design and Analysis of Algorithms',
      'Software Engineering': 'Software Engineering',
    },
    '6': {
      'Computer Networks': 'Computer Networks',
      'Theory of Computation': 'Theory of Computation',
      'Web Technologies': 'Web Technologies',
    },
    '7': {
      'Information Security': 'Information Security',
      'Mobile Computing': 'Mobile Computing',
      'Cloud Computing': 'Cloud Computing',
    },
    '8': {
      'Big Data': 'Big Data',
      'Cyber Security': 'Cyber Security',
      'Project': 'Project',
    }
  },
  ECE: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Network Analysis': 'Network Analysis',
      'Electronic Devices': 'Electronic Devices',
      'Signals and Systems': 'Signals and Systems',
    },
    '4': {
      'Analog Circuits': 'Analog Circuits',
      'Digital Circuits': 'Digital Circuits',
      'Communication Systems': 'Communication Systems',
    },
    '5': {
      'Microprocessors': 'Microprocessors',
      'Control Systems': 'Control Systems',
      'Electromagnetic Theory': 'Electromagnetic Theory',
    },
    '6': {
      'VLSI Design': 'VLSI Design',
      'Digital Signal Processing': 'Digital Signal Processing',
      'Antenna and Wave Propagation': 'Antenna and Wave Propagation',
    },
    '7': {
      'Embedded Systems': 'Embedded Systems',
      'Wireless Communication': 'Wireless Communication',
      'Optical Communication': 'Optical Communication',
    },
    '8': {
      'Satellite Communication': 'Satellite Communication',
      'Project': 'Project',
      'Nano Electronics': 'Nano Electronics',
    }
  },
  EX: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Electrical Circuits': 'Electrical Circuits',
      'Electromagnetic Fields': 'Electromagnetic Fields',
      'Analog Electronics': 'Analog Electronics',
    },
    '4': {
      'Electrical Machines': 'Electrical Machines',
      'Digital Electronics': 'Digital Electronics',
      'Control Systems': 'Control Systems',
    },
    '5': {
      'Power Systems': 'Power Systems',
      'Microprocessors': 'Microprocessors',
      'Measurement and Instrumentation': 'Measurement and Instrumentation',
    },
    '6': {
      'Power Electronics': 'Power Electronics',
      'Renewable Energy': 'Renewable Energy',
      'High Voltage Engineering': 'High Voltage Engineering',
    },
    '7': {
      'Switchgear and Protection': 'Switchgear and Protection',
      'Electric Drives': 'Electric Drives',
      'Utilization of Electrical Energy': 'Utilization of Electrical Energy',
    },
    '8': {
      'Project': 'Project',
      'Industrial Automation': 'Industrial Automation',
      'Smart Grid': 'Smart Grid',
    }
  },
  ME: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Thermodynamics': 'Thermodynamics',
      'Fluid Mechanics': 'Fluid Mechanics',
      'Material Science': 'Material Science',
    },
    '4': {
      'Manufacturing Processes': 'Manufacturing Processes',
      'Kinematics of Machines': 'Kinematics of Machines',
      'Machine Drawing': 'Machine Drawing',
    },
    '5': {
      'Heat Transfer': 'Heat Transfer',
      'Dynamics of Machines': 'Dynamics of Machines',
      'Design of Machine Elements': 'Design of Machine Elements',
    },
    '6': {
      'Refrigeration and Air Conditioning': 'Refrigeration and Air Conditioning',
      'Automobile Engineering': 'Automobile Engineering',
      'CAD/CAM': 'CAD/CAM',
    },
    '7': {
      'Industrial Engineering': 'Industrial Engineering',
      'Robotics': 'Robotics',
      'Mechatronics': 'Mechatronics',
    },
    '8': {
      'Project': 'Project',
      'Operations Research': 'Operations Research',
      'Energy Management': 'Energy Management',
    }
  },
  CE: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Building Materials': 'Building Materials',
      'Surveying': 'Surveying',
      'Strength of Materials': 'Strength of Materials',
    },
    '4': {
      'Structural Analysis': 'Structural Analysis',
      'Concrete Technology': 'Concrete Technology',
      'Geotechnical Engineering': 'Geotechnical Engineering',
    },
    '5': {
      'Water Resources Engineering': 'Water Resources Engineering',
      'Transportation Engineering': 'Transportation Engineering',
      'Design of Structures': 'Design of Structures',
    },
    '6': {
      'Environmental Engineering': 'Environmental Engineering',
      'Foundation Engineering': 'Foundation Engineering',
      'Construction Management': 'Construction Management',
    },
    '7': {
      'Irrigation Engineering': 'Irrigation Engineering',
      'Bridge Engineering': 'Bridge Engineering',
      'Advanced Foundation Engineering': 'Advanced Foundation Engineering',
    },
    '8': {
      'Project': 'Project',
      'Earthquake Engineering': 'Earthquake Engineering',
      'Remote Sensing': 'Remote Sensing',
    }
  },
  PCT: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Petroleum Geology': 'Petroleum Geology',
      'Fluid Flow Operations': 'Fluid Flow Operations',
      'Process Calculations': 'Process Calculations',
    },
    '4': {
      'Heat Transfer Operations': 'Heat Transfer Operations',
      'Chemical Engineering Thermodynamics': 'Chemical Engineering Thermodynamics',
      'Drilling Engineering': 'Drilling Engineering',
    },
    '5': {
      'Petroleum Production Operations': 'Petroleum Production Operations',
      'Reservoir Engineering': 'Reservoir Engineering',
      'Process Instrumentation': 'Process Instrumentation',
    },
    '6': {
      'Petrochemical Technology': 'Petrochemical Technology',
      'Natural Gas Engineering': 'Natural Gas Engineering',
      'Process Dynamics and Control': 'Process Dynamics and Control',
    },
    '7': {
      'Refinery Engineering': 'Refinery Engineering',
      'Enhanced Oil Recovery': 'Enhanced Oil Recovery',
      'Pipeline Engineering': 'Pipeline Engineering',
    },
    '8': {
      'Project': 'Project',
      'Petroleum Economics': 'Petroleum Economics',
      'Environmental Science': 'Environmental Science',
    }
  },
  AU: {
    '1': {
      'Mathematics I': 'Mathematics I',
      'Physics': 'Physics',
      'Chemistry': 'Chemistry',
    },
    '2': {
      'Mathematics II': 'Mathematics II',
      'Programming in C': 'Programming in C',
      'Engineering Mechanics': 'Engineering Mechanics',
    },
    '3': {
      'Automobile Engines': 'Automobile Engines',
      'Vehicle Dynamics': 'Vehicle Dynamics',
      'Thermodynamics': 'Thermodynamics',
    },
    '4': {
      'Automotive Chassis': 'Automotive Chassis',
      'Automotive Transmission': 'Automotive Transmission',
      'Fluid Mechanics': 'Fluid Mechanics',
    },
    '5': {
      'Automotive Electrical Systems': 'Automotive Electrical Systems',
      'Vehicle Body Engineering': 'Vehicle Body Engineering',
      'Heat Transfer': 'Heat Transfer',
    },
    '6': {
      'Automotive Electronics': 'Automotive Electronics',
      'Alternative Fuels': 'Alternative Fuels',
      'CAD/CAM': 'CAD/CAM',
    },
    '7': {
      'Automotive Safety': 'Automotive Safety',
      'Vehicle Maintenance': 'Vehicle Maintenance',
      'Hybrid Vehicles': 'Hybrid Vehicles',
    },
    '8': {
      'Project': 'Project',
      'Automotive Air Conditioning': 'Automotive Air Conditioning',
      'Emission Control': 'Emission Control',
    }
  }
};

export default subjectData; 