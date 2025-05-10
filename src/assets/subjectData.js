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
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Data Structures', 'Digital Logic', 'Discrete Mathematics'],
    '4': ['OOP', 'Computer Organization', 'Operating Systems'],
    '5': ['DBMS', 'Design and Analysis of Algorithms', 'Software Engineering'],
    '6': ['Computer Networks', 'Theory of Computation', 'Web Technologies'],
    '7': ['Information Security', 'Mobile Computing', 'Cloud Computing'],
    '8': ['Big Data', 'Cyber Security', 'Project']
  },
  ECE: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Network Analysis', 'Electronic Devices', 'Signals and Systems'],
    '4': ['Analog Circuits', 'Digital Circuits', 'Communication Systems'],
    '5': ['Microprocessors', 'Control Systems', 'Electromagnetic Theory'],
    '6': ['VLSI Design', 'Digital Signal Processing', 'Antenna and Wave Propagation'],
    '7': ['Embedded Systems', 'Wireless Communication', 'Optical Communication'],
    '8': ['Satellite Communication', 'Project', 'Nano Electronics']
  },
  EX: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Electrical Circuits', 'Electromagnetic Fields', 'Analog Electronics'],
    '4': ['Electrical Machines', 'Digital Electronics', 'Control Systems'],
    '5': ['Power Systems', 'Microprocessors', 'Measurement and Instrumentation'],
    '6': ['Power Electronics', 'Renewable Energy', 'High Voltage Engineering'],
    '7': ['Switchgear and Protection', 'Electric Drives', 'Utilization of Electrical Energy'],
    '8': ['Project', 'Industrial Automation', 'Smart Grid']
  },
  ME: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Thermodynamics', 'Fluid Mechanics', 'Material Science'],
    '4': ['Manufacturing Processes', 'Kinematics of Machines', 'Machine Drawing'],
    '5': ['Heat Transfer', 'Dynamics of Machines', 'Design of Machine Elements'],
    '6': ['Refrigeration and Air Conditioning', 'Automobile Engineering', 'CAD/CAM'],
    '7': ['Industrial Engineering', 'Robotics', 'Mechatronics'],
    '8': ['Project', 'Operations Research', 'Energy Management']
  },
  CE: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Building Materials', 'Surveying', 'Strength of Materials'],
    '4': ['Structural Analysis', 'Concrete Technology', 'Geotechnical Engineering'],
    '5': ['Water Resources Engineering', 'Transportation Engineering', 'Design of Structures'],
    '6': ['Environmental Engineering', 'Foundation Engineering', 'Construction Management'],
    '7': ['Irrigation Engineering', 'Bridge Engineering', 'Advanced Foundation Engineering'],
    '8': ['Project', 'Earthquake Engineering', 'Remote Sensing']
  },
  PCT: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Petroleum Geology', 'Fluid Flow Operations', 'Process Calculations'],
    '4': ['Heat Transfer Operations', 'Chemical Engineering Thermodynamics', 'Drilling Engineering'],
    '5': ['Petroleum Production Operations', 'Reservoir Engineering', 'Process Instrumentation'],
    '6': ['Petrochemical Technology', 'Natural Gas Engineering', 'Process Dynamics and Control'],
    '7': ['Refinery Engineering', 'Enhanced Oil Recovery', 'Pipeline Engineering'],
    '8': ['Project', 'Petroleum Economics', 'Environmental Science']
  },
  AU: {
    '1': ['Mathematics I', 'Physics', 'Chemistry'],
    '2': ['Mathematics II', 'Programming in C', 'Engineering Mechanics'],
    '3': ['Automobile Engines', 'Vehicle Dynamics', 'Thermodynamics'],
    '4': ['Automotive Chassis', 'Automotive Transmission', 'Fluid Mechanics'],
    '5': ['Automotive Electrical Systems', 'Vehicle Body Engineering', 'Heat Transfer'],
    '6': ['Automotive Electronics', 'Alternative Fuels', 'CAD/CAM'],
    '7': ['Automotive Safety', 'Vehicle Maintenance', 'Hybrid Vehicles'],
    '8': ['Project', 'Automotive Air Conditioning', 'Emission Control']
  }
};

export default subjectData; 