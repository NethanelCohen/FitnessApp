import React, { useState, useEffect } from 'react';
import './Workouts.css';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [exerciseOptions, setExerciseOptions] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [workoutData, setWorkoutData] = useState({
    exerciseType: '',
    weight: '',
    reps: '',
    date: '',
  });

  // Fetch exercise data from API
  useEffect(() => {
    fetch('https://wger.de/api/v2/exercise/?language=2') // Fetch exercises in English
      .then((response) => response.json())
      .then((data) => {
        const exercises = data.results.map((exercise) => ({
          id: exercise.id,
          name: exercise.name,
        }));
        setExerciseOptions(exercises);
      })
      .catch((error) => console.error('Error fetching exercise data:', error));
  }, []);

  // Filter exercises based on input
  const handleExerciseInputChange = (input) => {
    setWorkoutData({ ...workoutData, exerciseType: input });
    const filtered = exerciseOptions.filter((exercise) =>
      exercise.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredExercises(filtered);
  };

  const handleAddWorkout = () => {
    setWorkouts([...workouts, workoutData]);
    setShowPopup(false);
    setWorkoutData({ exerciseType: '', weight: '', reps: '', date: '' });
  };

  const handleExerciseSelect = (exercise) => {
    setWorkoutData({ ...workoutData, exerciseType: exercise });
    setFilteredExercises([]); // Hide suggestions when an option is selected
  };

  // Function to get the current week days
  const getCurrentWeekDays = () => {
    const today = new Date();
    const week = [];

    // Get the first day of the week (Sunday)
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDay);
      day.setDate(firstDay.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const currentWeek = getCurrentWeekDays();

  return (
    <div className="workouts-container">
      <h1 className="workouts-title">Your Workouts</h1>
      <button onClick={() => setShowPopup(true)} className="add-workout-btn">
        + Add Workout
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add New Workout</h3>

            <label>Exercise Type</label>
            <input
              type="text"
              value={workoutData.exerciseType}
              onChange={(e) => handleExerciseInputChange(e.target.value)}
              placeholder="Type to search for an exercise"
            />
            {filteredExercises.length > 0 && (
              <ul className="suggestions-list">
                {filteredExercises.map((exercise) => (
                  <li
                    key={exercise.id}
                    onClick={() => handleExerciseSelect(exercise.name)}
                    className="suggestion-item"
                  >
                    {exercise.name}
                  </li>
                ))}
              </ul>
            )}

            <label>Weight (kg)</label>
            <input
              type="number"
              value={workoutData.weight}
              onChange={(e) => setWorkoutData({ ...workoutData, weight: e.target.value })}
            />

            <label>Reps</label>
            <input
              type="number"
              value={workoutData.reps}
              onChange={(e) => setWorkoutData({ ...workoutData, reps: e.target.value })}
            />

            <label>Select Date</label>
            <input
              type="date"
              value={workoutData.date}
              onChange={(e) => setWorkoutData({ ...workoutData, date: e.target.value })}
            />

            <button onClick={handleAddWorkout}>Save</button>
            <button className="popup-btn cancel" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Week View */}
      <div className="week-grid">
        {currentWeek.map((day) => (
          <div key={day.toDateString()} className="day-column">
            <h3>{day.toDateString().split(' ')[0]}</h3>
            <div className="workout-list">
              {workouts
                .filter((workout) => workout.date === day.toISOString().split('T')[0])
                .map((workout, index) => (
                  <div key={index} className="card workout-card">
                    <p><strong>{workout.exerciseType}</strong></p>
                    <p>{workout.weight} kg - {workout.reps} reps</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
