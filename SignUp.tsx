import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goals, setGoals] = useState([]);
    const [activityLevel, setActivityLevel] = useState('');
    const [medicalProblems, setMedicalProblems] = useState('');

    const handleContinue = () => {
        if (step === 1) {
            if (!name || !gender || !dob || !height || !weight) {
                Alert.alert('Please fill all fields in Step 1');
                return;
            }
            setStep(2);
        } else if (step === 2) {
            if (goals.length === 0) {
                Alert.alert('Please select at least one goal');
                return;
            }
            setStep(3);
        } else if (step === 3) {
            if (!activityLevel) {
                Alert.alert('Please select your activity level');
                return;
            }
            setStep(4);
        } else if (step === 4) {
            if (!medicalProblems) {
                Alert.alert('Please select your medical condition');
                return;
            }
            Alert.alert('Sign Up Complete!');
        }
    };

    const handleGoalSelect = goal => {
        if (goals.includes(goal)) {
            setGoals(goals.filter(g => g !== goal));
        } else {
            setGoals([...goals, goal]);
        }
    };

    const calculateProgress = () => {
        return (step - 1) * 25; // Each step represents 25% of the form
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Tell Us About Yourself</Text>

            {step === 1 && (
                <View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        placeholderTextColor="#a9a9a9"
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.genderContainer}>
                        <TouchableOpacity
                            onPress={() => setGender('Male')}
                            style={[
                                styles.genderButton,
                                gender === 'Male' && styles.selectedButton,
                            ]}>
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Male' && styles.selectedText,
                                ]}>
                                Male
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setGender('Female')}
                            style={[
                                styles.genderButton,
                                gender === 'Female' && styles.selectedButton,
                            ]}>
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Female' && styles.selectedText,
                                ]}>
                                Female
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Date of Birth</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor="#a9a9a9"
                        value={dob}
                        onChangeText={text => setDob(text)}
                    />

                    <Text style={styles.label}>Height (cm)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your height"
                        placeholderTextColor="#a9a9a9"
                        value={height}
                        onChangeText={text => setHeight(text)}
                    />

                    <Text style={styles.label}>Weight (kg)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your weight"
                        placeholderTextColor="#a9a9a9"
                        value={weight}
                        onChangeText={text => setWeight(text)}
                    />
                </View>
            )}

            {step === 2 && (
                <View>
                    <Text style={styles.header}>What is Your Goal?</Text>
                    <View style={styles.goalContainer}>
                        {[
                            'Workout Tracking',
                            'Personalized Workout Plans',
                            'Nutrition Guidance and Tracking',
                            'Social Integration Features',
                            'Health and Fitness Metrics',
                            'Community Challenges and Competitions',
                            'Virtual Coaching and Support',
                        ].map(goal => (
                            <TouchableOpacity
                                key={goal}
                                onPress={() => handleGoalSelect(goal)}
                                style={[
                                    styles.goalButton,
                                    goals.includes(goal) && styles.selectedButton,
                                ]}>
                                <Text style={styles.goalText}>{goal}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}

            {step === 3 && (
                <View>
                    <Text style={styles.header}>What is Your Activity Level?</Text>
                    <View style={styles.activityLevelContainer}>
                        {[
                            'Sedentary',
                            'Lightly Active',
                            'Moderately Active',
                            'Very Active',
                            'Super Active',
                        ].map(level => (
                            <TouchableOpacity
                                key={level}
                                onPress={() => setActivityLevel(level)}
                                style={[
                                    styles.activityButton,
                                    activityLevel === level && styles.selectedButton,
                                ]}>
                                <Text style={styles.goalText} >{level}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}

            {step === 4 && (
                <View>
                    <Text style={styles.header}>Do You Have Any Medical Problems?</Text>
                    <View style={styles.medicalProblemsContainer}>
                        {['None', 'Diabetes', 'Hypertension', 'Heart Disease', 'Other'].map(
                            problem => (
                                <TouchableOpacity
                                    key={problem}
                                    onPress={() => setMedicalProblems(problem)}
                                    style={[
                                        styles.medicalButton,
                                        medicalProblems === problem && styles.selectedButton,
                                    ]}>
                                    <Text style={styles.goalText} >{problem}</Text>
                                </TouchableOpacity>
                            ),
                        )}
                    </View>
                </View>
            )}

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>
                    {step === 4 ? 'Finish' : 'Continue'}
                </Text>
            </TouchableOpacity>

            {/* Progress Meter */}
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                    {calculateProgress()}% completed
                </Text>
                <View style={styles.progressBar}>
                    <View
                        style={[styles.progressFill, { width: `${calculateProgress()}%` }]}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#111212',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        color: '#111212',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    genderButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    selectedButton: {
        backgroundColor: '#1592bf',
        borderColor: '#1592bf',
    },
    genderText: {
        color: '#000',
    },
    selectedText: {
        color: '#fff',
    },
    goalContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    goalButton: {
        flexDirection: 'row',
        flexBasis: '48%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    goalText: {
        textAlign: 'center',
        color: '#000',
    },
    activityLevelContainer: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    activityButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    medicalProblemsContainer: {
        
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    medicalButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    progressContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    progressText: {
        fontSize: 16,
        marginBottom: 10,
    },
    progressBar: {
        width: '100%',
        height: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4CAF50',
    },
});

export default SignUpScreen;
