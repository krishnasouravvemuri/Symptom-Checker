import React, { useState } from "react";
import axios from "axios";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms) return;

    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/check-symptoms/", {
        symptoms,
      });
      setResult(res.data.result);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error: Unable to connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1>🩺 Healthcare Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter symptoms (e.g., fever, cough, headache)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows={4}
          style={{ width: "100%", padding: "10px" }}
        />
        <br />
        <button type="submit" disabled={loading} style={{ marginTop: "10px" }}>
          {loading ? "Checking..." : "Check Symptoms"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px", textAlign: "left", whiteSpace: "pre-wrap" }}>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
