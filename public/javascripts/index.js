let dummyData = [];
axios
  .get('../data.json')
  .then(function (response) {
    dummyData = response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    $(document).ready(function () {
      $('#default')[0].click(function () {});
    });
  });

document.getElementById('default').focus();

const filter = document.querySelectorAll('.filter a');

filter.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.target.outerText === 'Daily') {
      const current = dummyData.map((element) => {
        return element.timeframes.daily.current;
      });
      const prev = dummyData.map((element) => {
        return element.timeframes.daily.previous;
      });
      const present = document.querySelectorAll('.present');
      for (let index = 0; index < present.length; index++) {
        present[index].innerHTML = `${current[index]}hrs`;
      }
      const previous = document.querySelectorAll('.previous');
      for (let index = 0; index < previous.length; index++) {
        previous[index].innerHTML = `Yesterday - ${prev[index]}hrs`;
      }
    }
    if (event.target.outerText === 'Weekly') {
      const current = dummyData.map((element) => {
        return element.timeframes.weekly.current;
      });
      const prev = dummyData.map((element) => {
        return element.timeframes.weekly.previous;
      });
      const present = document.querySelectorAll('.present');
      for (let index = 0; index < present.length; index++) {
        present[index].innerHTML = `${current[index]}hrs`;
      }
      const previous = document.querySelectorAll('.previous');
      for (let index = 0; index < previous.length; index++) {
        previous[index].innerHTML = `Last Week - ${prev[index]}hrs`;
      }
    }
    if (event.target.outerText === 'Monthly') {
      const current = dummyData.map((element) => {
        return element.timeframes.monthly.current;
      });
      const prev = dummyData.map((element) => {
        return element.timeframes.monthly.previous;
      });
      const present = document.querySelectorAll('.present');
      for (let index = 0; index < present.length; index++) {
        present[index].innerHTML = `${current[index]}hrs`;
      }
      const previous = document.querySelectorAll('.previous');
      for (let index = 0; index < previous.length; index++) {
        previous[index].innerHTML = `Last Month - ${prev[index]}hrs`;
      }
    }
  });
});
