import { useState } from "react";
import { useNavigate } from "../hooks/useNavigate";
import { useAuth } from "../context/AuthContext";
import { Brain, ArrowLeft, ArrowRight, Chrome } from "lucide-react";

export default function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    gender: "",
    age: "",
    education: "",
    maritalStatus: "",
    dependents: "",
    nationality: "",
    jobType: "",
    yearsOfEmployment: "",
    annualSalary: "",
    collateralValue: "",
    employmentType: "private" as "government" | "private" | "startup",
    previousLoans: false,
    previousLoansStatus: "",
    previousLoanAmount: "",
    totalEmiAmount: "",
    savingBankBalance: "",
    loanPurpose: "",
    loanAmount: "",
    repaymentTermMonths: "",
    creditHistory: "",
    rentIncome: "",
    interestIncome: "",
    numberOfCreditCards: "",
    averageCreditUtilization: "",
    latePaymentHistory: false,
    loanInsurance: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleGoogleSignup = () => {
    alert("Google Sign-up integration would be implemented here");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 7) {
      setStep(step + 1);
    } else {
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        username: formData.username,
        gender: formData.gender,
        age: Number(formData.age),
        education: formData.education,
        maritalStatus: formData.maritalStatus,
        dependents: Number(formData.dependents),
        nationality: formData.nationality,
        jobType: formData.jobType,
        yearsOfEmployment: Number(formData.yearsOfEmployment),
        annualSalary: Number(formData.annualSalary),
        collateralValue: Number(formData.collateralValue),
        employmentType: formData.employmentType,
        previousLoans: formData.previousLoans,
        previousLoansStatus: formData.previousLoansStatus,
        previousLoanAmount: Number(formData.previousLoanAmount),
        totalEmiAmount: Number(formData.totalEmiAmount),
        savingBankBalance: Number(formData.savingBankBalance),
        loanPurpose: formData.loanPurpose,
        loanAmount: Number(formData.loanAmount),
        repaymentTermMonths: Number(formData.repaymentTermMonths),
        creditHistory: formData.creditHistory,
        rentIncome: Number(formData.rentIncome),
        interestIncome: Number(formData.interestIncome),
        numberOfCreditCards: Number(formData.numberOfCreditCards),
        averageCreditUtilization: Number(formData.averageCreditUtilization),
        latePaymentHistory: formData.latePaymentHistory,
        loanInsurance: formData.loanInsurance,
      };
      login(userData);
      navigate("home");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <button
              onClick={() => navigate("landing")}
              className="absolute top-4 left-4 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600 mb-6">Step 1 of 7: Authentication</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a strong password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Re-enter your password"
              />
            </div>
            {/*
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition"
            >
              <Chrome className="w-5 h-5" />
              <span className="font-medium">Continue with Google</span>
            </button>
            */}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Personal Information
            </h2>
            <p className="text-gray-600 mb-6">Step 2 of 7: Basic Details</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Education</option>
                <option value="high_school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Dependents
              </label>
              <input
                type="number"
                name="dependents"
                value={formData.dependents}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Employment Details
            </h2>
            <p className="text-gray-600 mb-6">Step 3 of 7: Job Information</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <input
                type="text"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Software Engineer, Teacher"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Employment
              </label>
              <input
                type="number"
                name="yearsOfEmployment"
                value={formData.yearsOfEmployment}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Salary
              </label>
              <input
                type="number"
                name="annualSalary"
                value={formData.annualSalary}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="In your local currency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collateral Value
              </label>
              <input
                type="number"
                name="collateralValue"
                value={formData.collateralValue}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Value of assets"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type
              </label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="startup">Startup</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Financial History
            </h2>
            <p className="text-gray-600 mb-6">Step 4 of 7: Previous Loans</p>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="previousLoans"
                  checked={formData.previousLoans}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  I have previous loans
                </span>
              </label>
            </div>

            {formData.previousLoans && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Loan Status
                  </label>
                  <select
                    name="previousLoansStatus"
                    value={formData.previousLoansStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                    <option value="paid">Fully Paid</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="defaulted">Defaulted</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Loan Amount
                  </label>
                  <input
                    type="number"
                    name="previousLoanAmount"
                    value={formData.previousLoanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total EMI Amount per Month
                  </label>
                  <input
                    type="number"
                    name="totalEmiAmount"
                    value={formData.totalEmiAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Savings Bank Balance
              </label>
              <input
                type="number"
                name="savingBankBalance"
                value={formData.savingBankBalance}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Loan Requirements
            </h2>
            <p className="text-gray-600 mb-6">Step 5 of 7: Loan Details</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Purpose
              </label>
              <select
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Purpose</option>
                <option value="home">Home Purchase</option>
                <option value="car">Car Purchase</option>
                <option value="education">Education</option>
                <option value="business">Business</option>
                <option value="personal">Personal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount
              </label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Amount you wish to borrow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Repayment Term (Months)
              </label>
              <input
                type="number"
                name="repaymentTermMonths"
                value={formData.repaymentTermMonths}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 12, 24, 36"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credit History
              </label>
              <select
                name="creditHistory"
                value={formData.creditHistory}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Credit History</option>
                <option value="excellent">Excellent (750+)</option>
                <option value="good">Good (700-749)</option>
                <option value="fair">Fair (650-699)</option>
                <option value="poor">Poor (Below 650)</option>
              </select>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Additional Income
            </h2>
            <p className="text-gray-600 mb-6">Step 6 of 7: Other Sources</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rent Income
              </label>
              <input
                type="number"
                name="rentIncome"
                value={formData.rentIncome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Monthly rent income"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Income
              </label>
              <input
                type="number"
                name="interestIncome"
                value={formData.interestIncome}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Annual interest from investments"
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Credit Information
            </h2>
            <p className="text-gray-600 mb-6">Step 7 of 7: Final Details</p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Credit Cards
              </label>
              <input
                type="number"
                name="numberOfCreditCards"
                value={formData.numberOfCreditCards}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Credit Utilization (%)
              </label>
              <input
                type="number"
                name="averageCreditUtilization"
                value={formData.averageCreditUtilization}
                onChange={handleChange}
                required
                min="0"
                max="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="latePaymentHistory"
                  checked={formData.latePaymentHistory}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  I have late payment history
                </span>
              </label>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="loanInsurance"
                  checked={formData.loanInsurance}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  I have loan insurance
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-10 h-10 text-blue-600 mr-3" />
            <span className="text-3xl font-bold text-gray-900">
              LoanAdvisor AI
            </span>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    s <= step
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(step / 7) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex space-x-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
              )}
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
              >
                {step === 7 ? "Complete Signup" : "Next"}
                {step < 7 && <ArrowRight className="w-5 h-5 ml-2" />}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("login")}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
