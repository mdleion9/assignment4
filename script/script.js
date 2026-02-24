 let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

const total = document.getElementById('total');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const jobsCount = document.getElementById('jobsCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');



function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  if (currentStatus === 'all-filter-btn') {
    jobsCount.innerText = allCardSection.children.length + " Jobs";
  } else if (currentStatus === 'interview-filter-btn') {
    jobsCount.innerText = interviewList.length + " Jobs";
  } else {
    jobsCount.innerText = rejectedList.length + " Jobs";
  }
}

calculateCount();



function toggleStyle(id) {

  allFilterBtn.classList.remove('bg-black','text-white');
  interviewFilterBtn.classList.remove('bg-black','text-white');
  rejectedFilterBtn.classList.remove('bg-black','text-white');

  allFilterBtn.classList.add('bg-gray-300');
  interviewFilterBtn.classList.add('bg-gray-300');
  rejectedFilterBtn.classList.add('bg-gray-300');

  const selected = document.getElementById(id);
  selected.classList.remove('bg-gray-300');
  selected.classList.add('bg-black','text-white');

  currentStatus = id;

  if (id === 'all-filter-btn') {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  } 
  else if (id === 'interview-filter-btn') {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderInterview();
  } 
  else {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    renderRejected();
  }

  calculateCount();
}


mainContainer.addEventListener('click', function (event) {


  if (event.target.classList.contains('interview-btn')) {

    const card = event.target.closest('.card');
    const companyName = card.querySelector('.plantName').innerText;
    const statusElement = card.querySelector('.status');

    statusElement.innerText = 'Interview';
    statusElement.className = "status bg-green-200 px-3 py-1 rounded-full inline-block";

    const jobInfo = {
      companyName: companyName,
      html: card.outerHTML
    };

    const exist = interviewList.find(item => item.companyName === companyName);
    if (!exist) {
      interviewList.push(jobInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    if (currentStatus === 'rejected-filter-btn') {
      renderRejected();
    }

    calculateCount();
  }


  if (event.target.classList.contains('rejected-btn')) {

    const card = event.target.closest('.card');
    const companyName = card.querySelector('.plantName').innerText;
    const statusElement = card.querySelector('.status');

    statusElement.innerText = 'Rejected';
    statusElement.className = "status bg-red-200 px-3 py-1 rounded-full inline-block";

    const jobInfo = {
      companyName: companyName,
      html: card.outerHTML
    };

    const exist = rejectedList.find(item => item.companyName === companyName);
    if (!exist) {
      rejectedList.push(jobInfo);
    }

    interviewList = interviewList.filter(item => item.companyName !== companyName);

    if (currentStatus === 'interview-filter-btn') {
      renderInterview();
    }

    calculateCount();
  }


  if (event.target.closest('.btn-delete')) {

    const card = event.target.closest('.card');
    const companyName = card.querySelector('.plantName').innerText;

    card.remove();

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    if (currentStatus === 'interview-filter-btn') renderInterview();
    if (currentStatus === 'rejected-filter-btn') renderRejected();

    calculateCount();
  }

});