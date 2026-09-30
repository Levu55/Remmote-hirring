export const JOBS = Array.from({ length: 60 }).map((_, i) => {
  const roles = [
    'Senior Frontend Engineer', 'Backend Developer (Go)', 'Product Designer',
    'Growth Marketing Manager', 'Full Stack Developer (Node/React)',
    'DevOps Engineer', 'Lead UI/UX Designer', 'Data Scientist',
    'Machine Learning Engineer', 'Product Manager', 'Customer Success Manager',
    'Technical Support Engineer', 'VP of Engineering', 'Director of Marketing'
  ];
  
  const companies = [
    'Acme Corp', 'Nexus', 'GlobalTech', 'AURA', 'CloudSync', 'ScaleApp', 'DataFlow',
    'FinTech Solutions', 'HealthCore', 'EduSmart', 'CreativeAI', 'Visionary Studios'
  ];
  
  const locations = ['Worldwide', 'Europe / UK', 'Americas', 'Asia', 'EMEA', 'US Remote'];
  const types = ['Full-time', 'Contract', 'Part-time', 'Freelance'];
  const salaries = ['$80k - $110k', '$120k - $150k', '$130k - $160k', '$90k - $120k', '$150k - $180k', '$200k+'];
  
  const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  
  return {
    id: String(i + 1),
    title: random(roles),
    company: random(companies),
    location: random(locations),
    type: random(types),
    salary: random(salaries),
    postedAt: `${Math.floor(Math.random() * 14) + 1} days ago`,
    featured: i < 5, // first 5 are featured
    desc: `We are looking for an experienced professional to join our team. This is a remote role requiring excellent communication and technical skills. You will be working on exciting projects with a global team.`,
  };
});
