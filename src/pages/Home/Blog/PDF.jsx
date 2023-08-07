import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
// TODO: DOWNLOAD PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  question: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 12,
    marginBottom: 10,
  },
});

const PdfDocument = ({ faqData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Banglar Cuisine Blog</Text>
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </React.Fragment>
      ))}
    </Page>
  </Document>
);

export default PdfDocument;
