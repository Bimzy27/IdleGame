import {taskService} from "../../services/TaskService";
import * as Progress from 'react-native-progress';
import {CoreText, StyledActiveTaskView} from "../../styles/Styles";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {RootState} from "../../Store";
import {setProgress} from "../../services/ActiveTaskSlice";
import Task from "../../models/tasks/Task";

const ActiveTaskView = () => {
    const progress: number = useSelector((state: RootState) => state.activeTask.progress);
    const dispatch = useDispatch()
    const activeTask: Task = taskService.getActiveTask();
    const intervalRef = useRef(null); // useRef hook to store interval ID

    // useEffect hook for interval and cleanup
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const newProgress = taskService.getProgress();
            // Dispatch an action to update progress in the store
            dispatch(setProgress(newProgress)); // Assuming you have setProgress action creator
        }, 25); // Update every 50 milliseconds (0.05 seconds)

        // Cleanup function to clear the interval on unmount
        return () => clearInterval(intervalRef.current);
    }, [dispatch]); // Dependency array: dispatch (to avoid infinite loops)

    return (
        <StyledActiveTaskView>
            {activeTask ? (
                <CoreText>{activeTask.name}</CoreText>
            ) : (
                <CoreText>No active task</CoreText>
            )}
            <Progress.Bar
                style={{ marginTop: 5, borderRadius: 15 }}
                progress={progress}
                color={'#5d84cb'}
                unfilledColor={'#c7c7c7'}
                borderColor={'#ffffff'}
                height={30}
                width={900}
            />
        </StyledActiveTaskView>
    );
};

export default ActiveTaskView;