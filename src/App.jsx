import React, { useState, useRef } from 'react';
import { Plus, X, ChevronUp, ChevronDown, GripVertical, Download, FileText, FileCode, FileDown, Save, Upload } from 'lucide-react';

const ResumeBuilder = () => {
  const [fontSizes, setFontSizes] = useState({
    nameHeader: 'text-2xl',
    jobTitle: 'text-lg', 
    contactInfo: 'text-sm',
    sectionHeaders: 'text-base',
    bodyText: 'text-sm',
    bulletPoints: 'text-sm'
  });

  const [resume, setResume] = useState({
    header: {
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'johndoe@nomail.com',
      phone: '999-999-9999',
      location: 'City, State',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe'
    },
    summary: 'Experienced Software Engineer with a strong background in developing scalable web applications and solving complex technical challenges. Proficient in multiple programming languages and frameworks with a passion for writing clean, efficient code. Demonstrated ability to work collaboratively in team environments and deliver high-quality software solutions.',
    sections: [
      {
        id: 'skills',
        title: 'SKILLS',
        type: 'skills',
        content: 'JavaScript, Python, Java, React, Node.js, HTML/CSS, SQL, Git, Docker, AWS, REST APIs, Agile Development, Test-Driven Development, Database Design, System Architecture, Problem Solving, Team Collaboration'
      },
      {
        id: 'experience',
        title: 'WORK EXPERIENCE',
        type: 'experience',
        items: [
          {
            id: 'exp1',
            position: 'Senior Software Engineer',
            company: 'Tech Solutions Inc.',
            dates: '01/2022 - Present',
            location: 'City, State',
            bullets: [
              'Led development of customer-facing web application serving 10,000+ daily active users using React and Node.js',
              'Architected and implemented RESTful APIs handling 1M+ requests per day with 99.9% uptime',
              'Mentored team of 3 junior developers, improving code quality and development velocity by 40%',
              'Collaborated with product managers and designers to deliver features that increased user engagement by 25%',
              'Implemented automated testing strategies that reduced production bugs by 60%'
            ]
          },
          {
            id: 'exp2',
            position: 'Software Engineer',
            company: 'Digital Innovations LLC',
            dates: '06/2020 - 12/2021',
            location: 'City, State',
            bullets: [
              'Developed and maintained enterprise software solutions using Java and Spring Framework',
              'Optimized database queries and improved application performance by 50%',
              'Participated in agile development process, including daily standups, sprint planning, and retrospectives',
              'Integrated third-party APIs and services to extend application functionality',
              'Created comprehensive documentation for new features and system architecture'
            ]
          },
          {
            id: 'exp3',
            position: 'Junior Software Developer',
            company: 'StartUp Ventures',
            dates: '08/2019 - 05/2020',
            location: 'City, State',
            bullets: [
              'Built responsive web interfaces using HTML, CSS, and JavaScript',
              'Collaborated with senior developers to implement new product features',
              'Fixed bugs and performed code reviews to maintain code quality',
              'Participated in technical discussions and contributed to architectural decisions'
            ]
          }
        ]
      },
      {
        id: 'education',
        title: 'EDUCATION',
        type: 'education',
        items: [
          {
            id: 'edu1',
            degree: 'B.S. Computer Science',
            school: 'State University',
            dates: '08/2015 - 05/2019',
            location: 'City, State'
          },
          {
            id: 'edu2',
            degree: 'High School Diploma',
            school: 'Local High School',
            dates: '08/2011 - 05/2015',
            location: 'City, State'
          }
        ]
      },
      {
        id: 'publications',
        title: 'PUBLICATIONS',
        type: 'publications',
        items: []
      }
    ]
  });

  const [editingSection, setEditingSection] = useState(null);
  const [draggedSection, setDraggedSection] = useState(null);
  const resumePreviewRef = useRef(null);
  const fileInputRef = useRef(null);

  const addSection = () => {
    const newSection = {
      id: Date.now().toString(),
      title: 'NEW SECTION',
      type: 'custom',
      content: ''
    };
    setResume(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const deleteSection = (sectionId) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.filter(s => s.id !== sectionId)
    }));
  };

  const updateSection = (sectionId, updates) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId ? { ...s, ...updates } : s
      )
    }));
  };

  const addExperienceItem = (sectionId) => {
    const newItem = {
      id: Date.now().toString(),
      position: 'Position Title',
      company: 'Company Name',
      dates: 'Start Date - End Date',
      location: 'Location',
      bullets: ['']
    };
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? { ...s, items: [...(s.items || []), newItem] }
          : s
      )
    }));
  };

  const addEducationItem = (sectionId) => {
    const newItem = {
      id: Date.now().toString(),
      degree: 'Degree',
      school: 'School Name',
      dates: 'Start Date - End Date',
      location: 'Location'
    };
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? { ...s, items: [...(s.items || []), newItem] }
          : s
      )
    }));
  };

  const deleteExperienceItem = (sectionId, itemId) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? { ...s, items: s.items.filter(item => item.id !== itemId) }
          : s
      )
    }));
  };

  const addPublicationItem = (sectionId) => {
    const newItem = {
      id: Date.now().toString(),
      type: 'Conference Paper',
      title: 'Publication Title',
      authors: 'Author Names',
      date: 'Publication Date',
      publisher: 'Publisher/Conference',
      description: ''
    };
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? { ...s, items: [...(s.items || []), newItem] }
          : s
      )
    }));
  };

  const updateExperienceItem = (sectionId, itemId, field, value) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? {
              ...s,
              items: s.items.map(item => 
                item.id === itemId 
                  ? { ...item, [field]: value }
                  : item
              )
            }
          : s
      )
    }));
  };

  const addBullet = (sectionId, itemId, insertIndex = null) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? {
              ...s,
              items: s.items.map(item => 
                item.id === itemId 
                  ? { 
                      ...item, 
                      bullets: insertIndex === null 
                        ? [...item.bullets, '']
                        : [
                            ...item.bullets.slice(0, insertIndex),
                            '',
                            ...item.bullets.slice(insertIndex)
                          ]
                    }
                  : item
              )
            }
          : s
      )
    }));
  };

  const updateBullet = (sectionId, itemId, bulletIndex, value) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? {
              ...s,
              items: s.items.map(item => 
                item.id === itemId 
                  ? {
                      ...item,
                      bullets: item.bullets.map((b, i) => 
                        i === bulletIndex ? value : b
                      )
                    }
                  : item
              )
            }
          : s
      )
    }));
  };

  const deleteBullet = (sectionId, itemId, bulletIndex) => {
    setResume(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === sectionId 
          ? {
              ...s,
              items: s.items.map(item => 
                item.id === itemId 
                  ? {
                      ...item,
                      bullets: item.bullets.filter((_, i) => i !== bulletIndex)
                    }
                  : item
              )
            }
          : s
      )
    }));
  };

  const moveSection = (index, direction) => {
    const newSections = [...resume.sections];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newSections.length) {
      [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
      setResume(prev => ({ ...prev, sections: newSections }));
    }
  };

  const handleDragStart = (e, index) => {
    setDraggedSection(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Convert Tailwind font sizes to pixel/point values
  const getFontSizeValue = (tailwindClass, unit = 'px') => {
    const sizeMap = {
      'text-xs': unit === 'pt' ? '9pt' : '12px',
      'text-sm': unit === 'pt' ? '11pt' : '14px',
      'text-base': unit === 'pt' ? '12pt' : '16px',
      'text-lg': unit === 'pt' ? '14pt' : '18px',
      'text-xl': unit === 'pt' ? '15pt' : '20px',
      'text-2xl': unit === 'pt' ? '18pt' : '24px',
      'text-3xl': unit === 'pt' ? '22pt' : '30px',
      'text-4xl': unit === 'pt' ? '27pt' : '36px'
    };
    return sizeMap[tailwindClass] || (unit === 'pt' ? '12pt' : '16px');
  };

  // Auto-resize all textareas on mount and when items change
  React.useEffect(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  }, [resume.sections]);

  const saveResumeToFile = () => {
    const resumeData = {
      resume,
      fontSizes,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    const dataStr = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-${resume.header.name.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadResumeFromFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const resumeData = JSON.parse(e.target.result);
        
        // Validate the loaded data structure
        if (resumeData.resume && resumeData.resume.header && resumeData.resume.sections) {
          setResume(resumeData.resume);
          
          // Load font sizes if they exist, otherwise keep current ones
          if (resumeData.fontSizes) {
            setFontSizes(resumeData.fontSizes);
          }
          
          // Reset the file input
          event.target.value = '';
          
          alert('Resume loaded successfully!');
        } else {
          throw new Error('Invalid resume file format');
        }
      } catch (error) {
        alert('Error loading resume file: ' + error.message);
        event.target.value = '';
      }
    };
    
    reader.readAsText(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const exportToText = () => {
    let text = `${resume.header.name}\n${resume.header.title}\n\n`;
    text += `${resume.header.email} | ${resume.header.phone} | ${resume.header.location}\n`;
    text += `${resume.header.linkedin} | ${resume.header.github}\n\n`;
    text += `SUMMARY\n${resume.summary}\n\n`;
    
    resume.sections.forEach(section => {
      text += `${section.title}\n`;
      text += '='.repeat(50) + '\n';
      
      if (section.type === 'skills' || section.type === 'custom') {
        text += `${section.content}\n\n`;
      } else if (section.type === 'experience') {
        section.items?.forEach(item => {
          text += `${item.position}\n`;
          text += `${item.company} | ${item.dates} | ${item.location}\n`;
          item.bullets.forEach(bullet => {
            if (bullet) text += `• ${bullet}\n`;
          });
          text += '\n';
        });
      } else if (section.type === 'education') {
        section.items?.forEach(item => {
          text += `${item.degree}\n`;
          text += `${item.school} | ${item.dates} | ${item.location}\n\n`;
        });
      } else if (section.type === 'publications') {
        section.items?.forEach(item => {
          text += `${item.title}\n`;
          text += `${item.type} | ${item.date}\n`;
          text += `Authors: ${item.authors}\n`;
          text += `${item.publisher}\n`;
          if (item.description) text += `${item.description}\n`;
          text += '\n';
        });
      }
    });
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    a.click();
  };

  const exportToHTML = () => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${resume.header.name} - Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }
        h1 {
            margin: 0;
            font-size: ${getFontSizeValue(fontSizes.nameHeader)};
            color: #000;
        }
        h2 {
            font-size: ${getFontSizeValue(fontSizes.sectionHeaders)};
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
            margin-top: 20px;
            margin-bottom: 10px;
            color: #000;
        }
        h3 {
            font-size: ${getFontSizeValue(fontSizes.bodyText)};
            margin: 10px 0 5px 0;
            color: #000;
        }
        .subtitle {
            font-size: ${getFontSizeValue(fontSizes.jobTitle)};
            color: #555;
            margin: 5px 0;
        }
        .contact {
            font-size: ${getFontSizeValue(fontSizes.contactInfo)};
            color: #555;
            margin: 5px 0;
        }
        .summary {
            text-align: justify;
            margin-bottom: 20px;
        }
        .experience-item, .education-item {
            margin-bottom: 20px;
        }
        .job-header, .edu-header {
            margin-bottom: 10px;
        }
        .company-info, .school-info {
            font-style: italic;
            color: #555;
            margin: 5px 0;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 5px;
            font-size: ${getFontSizeValue(fontSizes.bulletPoints)};
        }
        .skills {
            line-height: 1.8;
            font-size: ${getFontSizeValue(fontSizes.bodyText)};
        }
        .summary {
            font-size: ${getFontSizeValue(fontSizes.bodyText)};
        }
        @media print {
            body {
                margin: 0;
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${resume.header.name}</h1>
        <div class="subtitle">${resume.header.title}</div>
        <div class="contact">${resume.header.email} | ${resume.header.phone} | ${resume.header.location}</div>
        <div class="contact">${resume.header.linkedin} | ${resume.header.github}</div>
    </div>
    
    ${resume.summary ? `
    <section>
        <h2>PROFESSIONAL SUMMARY</h2>
        <div class="summary">${resume.summary}</div>
    </section>
    ` : ''}
    
    ${resume.sections.map(section => {
      let sectionHTML = `<section><h2>${section.title}</h2>`;
      
      if (section.type === 'skills' || section.type === 'custom') {
        sectionHTML += `<div class="skills">${section.content.replace(/\n/g, '<br>')}</div>`;
      } else if (section.type === 'experience') {
        section.items?.forEach(item => {
          sectionHTML += `
            <div class="experience-item">
              <div class="job-header">
                <h3>${item.position}</h3>
                <div class="company-info">${item.company} | ${item.dates} | ${item.location}</div>
              </div>
              <ul>
                ${item.bullets.filter(b => b).map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>
            </div>
          `;
        });
      } else if (section.type === 'education') {
        section.items?.forEach(item => {
          sectionHTML += `
            <div class="education-item">
              <div class="edu-header">
                <h3>${item.degree}</h3>
                <div class="school-info">${item.school} | ${item.dates} | ${item.location}</div>
              </div>
            </div>
          `;
        });
      }
      
      sectionHTML += '</section>';
      return sectionHTML;
    }).join('')}
</body>
</html>
    `;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
  };

  const exportToPDF = () => {
    // Create a simple HTML that will be printed to PDF
    const printWindow = window.open('', '_blank');
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${resume.header.name} - Resume</title>
    <style>
        @page {
            size: letter;
            margin: 0.5in;
        }
        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: ${getFontSizeValue(fontSizes.bodyText, 'pt')};
            line-height: 1.4;
            color: #000;
            margin: 0;
            padding: 0;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        h1 {
            margin: 0;
            font-size: ${getFontSizeValue(fontSizes.nameHeader, 'pt')};
            font-weight: bold;
        }
        h2 {
            font-size: ${getFontSizeValue(fontSizes.sectionHeaders, 'pt')};
            font-weight: bold;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
            margin: 15px 0 8px 0;
            text-transform: uppercase;
        }
        h3 {
            font-size: ${getFontSizeValue(fontSizes.bodyText, 'pt')};
            font-weight: bold;
            margin: 8px 0 4px 0;
        }
        .subtitle {
            font-size: ${getFontSizeValue(fontSizes.jobTitle, 'pt')};
            margin: 5px 0;
        }
        .contact {
            font-size: ${getFontSizeValue(fontSizes.contactInfo, 'pt')};
            margin: 3px 0;
        }
        .summary {
            text-align: justify;
            margin-bottom: 15px;
        }
        .experience-item, .education-item {
            margin-bottom: 12px;
        }
        .company-info, .school-info {
            font-style: italic;
            margin: 3px 0;
        }
        ul {
            margin: 5px 0;
            padding-left: 20px;
        }
        li {
            margin-bottom: 3px;
            font-size: ${getFontSizeValue(fontSizes.bulletPoints, 'pt')};
        }
        @media print {
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${resume.header.name}</h1>
        <div class="subtitle">${resume.header.title}</div>
        <div class="contact">${resume.header.email} | ${resume.header.phone} | ${resume.header.location}</div>
        <div class="contact">${resume.header.linkedin} | ${resume.header.github}</div>
    </div>
    
    ${resume.summary ? `
    <section>
        <h2>Professional Summary</h2>
        <div class="summary">${resume.summary}</div>
    </section>
    ` : ''}
    
    ${resume.sections.map(section => {
      let sectionHTML = `<section><h2>${section.title}</h2>`;
      
      if (section.type === 'skills' || section.type === 'custom') {
        sectionHTML += `<div>${section.content.replace(/\n/g, '<br>')}</div>`;
      } else if (section.type === 'experience') {
        section.items?.forEach(item => {
          sectionHTML += `
            <div class="experience-item">
              <h3>${item.position}</h3>
              <div class="company-info">${item.company} | ${item.dates} | ${item.location}</div>
              <ul>
                ${item.bullets.filter(b => b).map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>
            </div>
          `;
        });
      } else if (section.type === 'education') {
        section.items?.forEach(item => {
          sectionHTML += `
            <div class="education-item">
              <h3>${item.degree}</h3>
              <div class="school-info">${item.school} | ${item.dates} | ${item.location}</div>
            </div>
          `;
        });
      }
      
      sectionHTML += '</section>';
      return sectionHTML;
    }).join('')}
    
    <div class="no-print" style="margin-top: 40px; text-align: center;">
        <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Print / Save as PDF
        </button>
        <p style="margin-top: 10px; color: #666;">Use Ctrl+P (or Cmd+P on Mac) and select "Save as PDF" as the printer</p>
    </div>
</body>
</html>
    `;
    
    printWindow.document.write(html);
    printWindow.document.close();
    
    // Auto-trigger print dialog after a short delay
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">ATS-Friendly Resume Builder</h1>
          <div className="flex gap-2">
            <button
              onClick={saveResumeToFile}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              title="Save resume as JSON file"
            >
              <Save size={20} />
              Save
            </button>
            <button
              onClick={triggerFileInput}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              title="Load resume from JSON file"
            >
              <Upload size={20} />
              Load
            </button>
            <div className="w-px bg-gray-300 mx-2"></div>
            <button
              onClick={exportToText}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              title="Export as plain text (Best for ATS)"
            >
              <FileText size={20} />
              Text
            </button>
            <button
              onClick={exportToHTML}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              title="Export as HTML"
            >
              <FileCode size={20} />
              HTML
            </button>
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              title="Export as PDF"
            >
              <FileDown size={20} />
              PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Edit Resume</h2>
            
            {/* Header Section */}
            <div className="mb-6 p-4 border rounded">
              <h3 className="font-semibold mb-3">Header Information</h3>
              <input
                type="text"
                value={resume.header.name}
                onChange={(e) => setResume(prev => ({
                  ...prev,
                  header: { ...prev.header, name: e.target.value }
                }))}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Name"
              />
              <input
                type="text"
                value={resume.header.title}
                onChange={(e) => setResume(prev => ({
                  ...prev,
                  header: { ...prev.header, title: e.target.value }
                }))}
                className="w-full p-2 mb-2 border rounded"
                placeholder="Professional Title"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  value={resume.header.email}
                  onChange={(e) => setResume(prev => ({
                    ...prev,
                    header: { ...prev.header, email: e.target.value }
                  }))}
                  className="p-2 border rounded"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={resume.header.phone}
                  onChange={(e) => setResume(prev => ({
                    ...prev,
                    header: { ...prev.header, phone: e.target.value }
                  }))}
                  className="p-2 border rounded"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Font Size Controls */}
            <div className="mb-6 p-4 border rounded">
              <h3 className="font-semibold mb-3">Font Size Settings</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Name Header</label>
                  <select
                    value={fontSizes.nameHeader}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, nameHeader: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-lg">Large (18px)</option>
                    <option value="text-xl">Extra Large (20px)</option>
                    <option value="text-2xl">2X Large (24px)</option>
                    <option value="text-3xl">3X Large (30px)</option>
                    <option value="text-4xl">4X Large (36px)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title</label>
                  <select
                    value={fontSizes.jobTitle}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, jobTitle: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-sm">Small (14px)</option>
                    <option value="text-base">Base (16px)</option>
                    <option value="text-lg">Large (18px)</option>
                    <option value="text-xl">Extra Large (20px)</option>
                    <option value="text-2xl">2X Large (24px)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Info</label>
                  <select
                    value={fontSizes.contactInfo}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, contactInfo: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-xs">Extra Small (12px)</option>
                    <option value="text-sm">Small (14px)</option>
                    <option value="text-base">Base (16px)</option>
                    <option value="text-lg">Large (18px)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Section Headers</label>
                  <select
                    value={fontSizes.sectionHeaders}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, sectionHeaders: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-sm">Small (14px)</option>
                    <option value="text-base">Base (16px)</option>
                    <option value="text-lg">Large (18px)</option>
                    <option value="text-xl">Extra Large (20px)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Body Text</label>
                  <select
                    value={fontSizes.bodyText}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, bodyText: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-xs">Extra Small (12px)</option>
                    <option value="text-sm">Small (14px)</option>
                    <option value="text-base">Base (16px)</option>
                    <option value="text-lg">Large (18px)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Bullet Points</label>
                  <select
                    value={fontSizes.bulletPoints}
                    onChange={(e) => setFontSizes(prev => ({ ...prev, bulletPoints: e.target.value }))}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="text-xs">Extra Small (12px)</option>
                    <option value="text-sm">Small (14px)</option>
                    <option value="text-base">Base (16px)</option>
                    <option value="text-lg">Large (18px)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-6 p-4 border rounded">
              <h3 className="font-semibold mb-3">Professional Summary</h3>
              <textarea
                value={resume.summary}
                onChange={(e) => setResume(prev => ({ ...prev, summary: e.target.value }))}
                className="w-full p-2 border rounded h-24"
                placeholder="Professional summary..."
              />
            </div>

            {/* Dynamic Sections */}
            <div className="space-y-4">
              {resume.sections.map((section, index) => (
                <div
                  key={section.id}
                  className="p-4 border rounded hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GripVertical size={20} className="text-gray-400 cursor-move" />
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => updateSection(section.id, { title: e.target.value })}
                        className="font-semibold text-lg border-b border-transparent hover:border-gray-300 focus:border-blue-500 outline-none"
                      />
                      {section.type === 'publications' && (
                    <div className="space-y-4">
                      {section.items?.map((item) => (
                        <div key={item.id} className="p-3 bg-gray-50 rounded relative">
                          <button
                            onClick={() => deleteExperienceItem(section.id, item.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white rounded-full p-1 shadow-sm"
                            title="Delete this publication"
                          >
                            <X size={18} />
                          </button>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <input
                              type="text"
                              value={item.type}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'type', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Publication Type (e.g., Conference Paper)"
                            />
                            <input
                              type="text"
                              value={item.date}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'date', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Date (e.g., 12/2020)"
                            />
                          </div>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'title', e.target.value)}
                            className="w-full p-1 mb-2 font-medium border-b pr-8"
                            placeholder="Publication Title"
                          />
                          <input
                            type="text"
                            value={item.authors}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'authors', e.target.value)}
                            className="w-full p-1 mb-2 border-b"
                            placeholder="Authors (e.g., John Doe, Jane Smith, et al.)"
                          />
                          <input
                            type="text"
                            value={item.publisher}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'publisher', e.target.value)}
                            className="w-full p-1 mb-2 border-b"
                            placeholder="Publisher/Conference/Journal"
                          />
                          <textarea
                            value={item.description}
                            onChange={(e) => {
                              updateExperienceItem(section.id, item.id, 'description', e.target.value);
                              e.target.style.height = 'auto';
                              e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            onInput={(e) => {
                              e.target.style.height = 'auto';
                              e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            className="w-full p-1 border-b resize-none overflow-hidden"
                            placeholder="Brief description of the publication..."
                            rows="2"
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => addPublicationItem(section.id)}
                        className="w-full p-2 border-2 border-dashed border-gray-300 rounded hover:border-blue-500 text-gray-600"
                      >
                        + Add Publication
                      </button>
                    </div>
                  )}

                </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => moveSection(index, 'up')}
                        disabled={index === 0}
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                      >
                        <ChevronUp size={16} />
                      </button>
                      <button
                        onClick={() => moveSection(index, 'down')}
                        disabled={index === resume.sections.length - 1}
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                      >
                        <ChevronDown size={16} />
                      </button>
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Section Content Based on Type */}
                  {(section.type === 'skills' || section.type === 'custom') && (
                    <textarea
                      value={section.content}
                      onChange={(e) => updateSection(section.id, { content: e.target.value })}
                      className="w-full p-2 border rounded"
                      placeholder="Enter content..."
                      rows="3"
                    />
                  )}

                  {section.type === 'experience' && (
                    <div className="space-y-4">
                      {section.items?.map((item) => (
                        <div key={item.id} className="p-3 bg-gray-50 rounded relative">
                          <button
                            onClick={() => deleteExperienceItem(section.id, item.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white rounded-full p-1 shadow-sm"
                            title="Delete this experience"
                          >
                            <X size={18} />
                          </button>
                          <input
                            type="text"
                            value={item.position}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'position', e.target.value)}
                            className="w-full p-1 mb-2 font-medium border-b pr-8"
                            placeholder="Position"
                          />
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <input
                              type="text"
                              value={item.company}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'company', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Company"
                            />
                            <input
                              type="text"
                              value={item.location}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'location', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Location"
                            />
                          </div>
                          <input
                            type="text"
                            value={item.dates}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'dates', e.target.value)}
                            className="w-full p-1 border-b mb-2"
                            placeholder="Start Date - End Date"
                          />
                          
                          <div className="space-y-2">
                            {item.bullets.map((bullet, bIndex) => (
                              <div key={bIndex} className="group relative">
                                <div className="flex gap-2">
                                  <span className="mt-1 flex-shrink-0">•</span>
                                  <textarea
                                    value={bullet}
                                    onChange={(e) => {
                                      updateBullet(section.id, item.id, bIndex, e.target.value);
                                      // Auto-resize textarea
                                      e.target.style.height = 'auto';
                                      e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                    onInput={(e) => {
                                      e.target.style.height = 'auto';
                                      e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                    className="flex-1 p-1 border-b resize-none overflow-hidden"
                                    placeholder="Achievement or responsibility"
                                    rows="1"
                                    style={{ minHeight: '24px' }}
                                  />
                                  <div className="flex gap-1 flex-shrink-0">
                                    <button
                                      onClick={() => addBullet(section.id, item.id, bIndex)}
                                      className="opacity-0 group-hover:opacity-100 text-blue-500 hover:text-blue-700 transition-opacity"
                                      title="Add bullet above"
                                    >
                                      <Plus size={14} />↑
                                    </button>
                                    <button
                                      onClick={() => addBullet(section.id, item.id, bIndex + 1)}
                                      className="opacity-0 group-hover:opacity-100 text-blue-500 hover:text-blue-700 transition-opacity"
                                      title="Add bullet below"
                                    >
                                      <Plus size={14} />↓
                                    </button>
                                    <button
                                      onClick={() => deleteBullet(section.id, item.id, bIndex)}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      <X size={16} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button
                              onClick={() => addBullet(section.id, item.id)}
                              className="text-blue-600 hover:text-blue-800 text-sm ml-6"
                            >
                              + Add bullet point
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addExperienceItem(section.id)}
                        className="w-full p-2 border-2 border-dashed border-gray-300 rounded hover:border-blue-500 text-gray-600"
                      >
                        + Add Experience
                      </button>
                    </div>
                  )}

                  {section.type === 'education' && (
                    <div className="space-y-4">
                      {section.items?.map((item) => (
                        <div key={item.id} className="p-3 bg-gray-50 rounded relative">
                          <button
                            onClick={() => deleteExperienceItem(section.id, item.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white rounded-full p-1 shadow-sm"
                            title="Delete this education"
                          >
                            <X size={18} />
                          </button>
                          <input
                            type="text"
                            value={item.degree}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'degree', e.target.value)}
                            className="w-full p-1 mb-2 font-medium border-b pr-8"
                            placeholder="Degree"
                          />
                          <input
                            type="text"
                            value={item.school}
                            onChange={(e) => updateExperienceItem(section.id, item.id, 'school', e.target.value)}
                            className="w-full p-1 mb-2 border-b"
                            placeholder="School"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={item.dates}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'dates', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Dates"
                            />
                            <input
                              type="text"
                              value={item.location}
                              onChange={(e) => updateExperienceItem(section.id, item.id, 'location', e.target.value)}
                              className="p-1 border-b"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addEducationItem(section.id)}
                        className="w-full p-2 border-2 border-dashed border-gray-300 rounded hover:border-blue-500 text-gray-600"
                      >
                        + Add Education
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Add Section Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  const newSection = {
                    id: Date.now().toString(),
                    title: 'EXPERIENCE',
                    type: 'experience',
                    items: []
                  };
                  setResume(prev => ({
                    ...prev,
                    sections: [...prev.sections, newSection]
                  }));
                }}
                className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                + Add Experience Section
              </button>
              <button
                onClick={() => {
                  const newSection = {
                    id: Date.now().toString(),
                    title: 'EDUCATION',
                    type: 'education',
                    items: []
                  };
                  setResume(prev => ({
                    ...prev,
                    sections: [...prev.sections, newSection]
                  }));
                }}
                className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                + Add Education Section
              </button>
              <button
                onClick={() => {
                  const newSection = {
                    id: Date.now().toString(),
                    title: 'PUBLICATIONS',
                    type: 'publications',
                    items: []
                  };
                  setResume(prev => ({
                    ...prev,
                    sections: [...prev.sections, newSection]
                  }));
                }}
                className="p-3 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                + Add Publications Section
              </button>
              <button
                onClick={() => {
                  const newSection = {
                    id: Date.now().toString(),
                    title: 'SKILLS',
                    type: 'skills',
                    content: ''
                  };
                  setResume(prev => ({
                    ...prev,
                    sections: [...prev.sections, newSection]
                  }));
                }}
                className="p-3 bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Skills Section
              </button>
              <button
                onClick={addSection}
                className="p-3 bg-gray-600 text-white rounded hover:bg-gray-700 col-span-2"
              >
                + Add Custom Section
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText size={20} />
              Preview (ATS-Friendly Format)
            </h2>
            <div className={`border-2 border-gray-200 rounded p-6 font-mono ${fontSizes.bodyText} bg-gray-50`}>
              <div className="text-center mb-4">
                <h1 className={`${fontSizes.nameHeader} font-bold`}>{resume.header.name}</h1>
                <p className={fontSizes.jobTitle}>{resume.header.title}</p>
                <p className={`${fontSizes.contactInfo} mt-2`}>
                  {resume.header.email} | {resume.header.phone} | {resume.header.location}
                </p>
                <p className={fontSizes.contactInfo}>
                  {resume.header.linkedin} | {resume.header.github}
                </p>
              </div>

              {resume.summary && (
                <div className="mb-4">
                  <h2 className={`${fontSizes.sectionHeaders} font-bold border-b border-gray-400 mb-2`}>PROFESSIONAL SUMMARY</h2>
                  <p className="text-justify">{resume.summary}</p>
                </div>
              )}

              {resume.sections.map((section) => (
                <div key={section.id} className="mb-4">
                  <h2 className={`${fontSizes.sectionHeaders} font-bold border-b border-gray-400 mb-2`}>{section.title}</h2>
                  
                  {(section.type === 'skills' || section.type === 'custom') && (
                    <p className="whitespace-pre-wrap">{section.content}</p>
                  )}

                  {section.type === 'experience' && section.items?.map((item) => (
                    <div key={item.id} className="mb-3">
                      <p className="font-semibold">{item.position}</p>
                      <p className="italic">{item.company} | {item.dates} | {item.location}</p>
                      <ul className="mt-1">
                        {item.bullets.filter(b => b).map((bullet, i) => (
                          <li key={i} className={`ml-4 ${fontSizes.bulletPoints}`}>• {bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.type === 'education' && section.items?.map((item) => (
                    <div key={item.id} className="mb-2">
                      <p className="font-semibold">{item.degree}</p>
                      <p className="italic">{item.school} | {item.dates} | {item.location}</p>
                    </div>
                  ))}

                  {section.type === 'publications' && section.items?.map((item) => (
                    <div key={item.id} className="mb-3">
                      <p className="font-semibold">{item.title}</p>
                      <p className={`${fontSizes.bodyText} italic`}>{item.type} | {item.date}</p>
                      <p className={fontSizes.bodyText}>{item.authors}</p>
                      <p className={`${fontSizes.bodyText} italic`}>{item.publisher}</p>
                      {item.description && <p className={`${fontSizes.bodyText} mt-1`}>{item.description}</p>}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
              <h3 className="font-semibold text-green-800 mb-2">✓ ATS-Friendly Features</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Simple, clean formatting without tables or graphics</li>
                <li>• Standard section headings (Experience, Education, Skills)</li>
                <li>• Consistent date formats and bullet points</li>
                <li>• Plain text export option for maximum compatibility</li>
                <li>• No headers, footers, or special characters that confuse ATS</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Hidden file input for loading resumes */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={loadResumeFromFile}
          accept=".json"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;