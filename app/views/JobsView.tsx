"use client";
import { useState } from "react";
import { Clock, MapPin, Package, CheckCircle, XCircle, Star, User, Truck } from "lucide-react";

interface DeliveryJob {
  id: string;
  productTitle: string;
  productImage: string;
  buyerName: string;
  buyerAvatar: string;
  sellerName: string;
  sellerAvatar: string;
  pickupLocation: string;
  deliveryLocation: string;
  budget: number;
  timeLimit: string; // "2 hours", "1 day", etc.
  status: "available" | "accepted" | "in_progress" | "completed" | "expired";
  acceptedBy?: string;
  acceptedAt?: string;
  estimatedDeliveryTime?: string;
  distance: string;
  notes: string;
}

const deliveryJobs: DeliveryJob[] = [
  {
    id: "1",
    productTitle: "AirPods Pro",
    productImage: "/product/airpods-6010254_1280.jpg",
    buyerName: "Sarah Johnson",
    buyerAvatar: "/screens/screen.png",
    sellerName: "TechStudent",
    sellerAvatar: "/screens/screen%20(2).png",
    pickupLocation: "University of Lagos - Main Campus",
    deliveryLocation: "Victoria Island - Lagos",
    budget: 3500,
    timeLimit: "2 hours",
    status: "available",
    distance: "15.2 km",
    notes: "Handle with care - fragile item"
  },
  {
    id: "2",
    productTitle: "Nike Air Max",
    productImage: "/product/nike-5041718_1280.jpg",
    buyerName: "Mike Chen",
    buyerAvatar: "/screens/screen%20(3).png",
    sellerName: "SneakerHead",
    sellerAvatar: "/screens/screen.png",
    pickupLocation: "Covenant University - Student Center",
    deliveryLocation: "Covenant University - Hostel Block A",
    budget: 1200,
    timeLimit: "30 minutes",
    status: "available",
    distance: "0.8 km",
    notes: "Size 9 - check before pickup"
  },
  {
    id: "3",
    productTitle: "Textbook - Advanced Calculus",
    productImage: "/screens/screen.png",
    buyerName: "Aisha Ibrahim",
    buyerAvatar: "/screens/screen%20(2).png",
    sellerName: "BookWorm",
    sellerAvatar: "/screens/screen%20(3).png",
    pickupLocation: "University of Ibadan - Library",
    deliveryLocation: "University of Ibadan - Faculty of Science",
    budget: 800,
    timeLimit: "1 hour",
    status: "accepted",
    acceptedBy: "You",
    acceptedAt: "2 minutes ago",
    distance: "1.2 km",
    notes: "Urgent delivery needed"
  },
  {
    id: "4",
    productTitle: "Gaming Chair",
    productImage: "/screens/screen%20(3).png",
    buyerName: "David Okafor",
    buyerAvatar: "/screens/screen.png",
    sellerName: "GamerPro",
    sellerAvatar: "/screens/screen%20(2).png",
    pickupLocation: "Babcock University - Student Village",
    deliveryLocation: "Babcock University - Off-campus Residence",
    budget: 2500,
    timeLimit: "4 hours",
    status: "in_progress",
    acceptedBy: "You",
    acceptedAt: "1 hour ago",
    estimatedDeliveryTime: "2:30 PM",
    distance: "3.5 km",
    notes: "Heavy item - bring help if needed"
  }
];

export default function JobsView() {
  const [selectedJob, setSelectedJob] = useState<DeliveryJob | null>(null);
  const [activeTab, setActiveTab] = useState<"available" | "my_deliveries">("available");

  const availableJobs = deliveryJobs.filter(job => job.status === "available");
  const myDeliveries = deliveryJobs.filter(job => job.acceptedBy === "You");

  const handleAcceptJob = (jobId: string) => {
    // In real app, this would make an API call
    console.log(`Accepted delivery job: ${jobId}`);
    setSelectedJob(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "#2196f3";
      case "accepted": return "#ff9800";
      case "in_progress": return "#4caf50";
      case "completed": return "#9e9e9e";
      case "expired": return "#f44336";
      default: return "#6b7280";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available": return "Available";
      case "accepted": return "Accepted";
      case "in_progress": return "In Progress";
      case "completed": return "Completed";
      case "expired": return "Expired";
      default: return status;
    }
  };

  return (
    <section className="container">
      {/* Header */}
      <div className="card" style={{ padding: 16, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
              <Truck size={24} style={{ color: "#2196f3" }} />
              Delivery Jobs
            </h2>
            <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Earn money by delivering packages to students</p>
          </div>
          <div style={{ 
            background: "linear-gradient(135deg, #2196f3 0%, #1e88e5 100%)", 
            color: "#fff", 
            padding: "8px 16px", 
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600
          }}>
            ₦{myDeliveries.reduce((sum, job) => sum + job.budget, 0).toLocaleString()} earned
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e5e7eb" }}>
          <button
            onClick={() => setActiveTab("available")}
            style={{
              padding: "8px 16px",
              border: "none",
              background: activeTab === "available" ? "#2196f3" : "transparent",
              color: activeTab === "available" ? "#fff" : "#6b7280",
              borderRadius: "8px 8px 0 0",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Available ({availableJobs.length})
          </button>
          <button
            onClick={() => setActiveTab("my_deliveries")}
            style={{
              padding: "8px 16px",
              border: "none",
              background: activeTab === "my_deliveries" ? "#2196f3" : "transparent",
              color: activeTab === "my_deliveries" ? "#fff" : "#6b7280",
              borderRadius: "8px 8px 0 0",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            My Deliveries ({myDeliveries.length})
          </button>
        </div>
      </div>

      {/* Job List */}
      <div style={{ display: "grid", gap: 12 }}>
        {(activeTab === "available" ? availableJobs : myDeliveries).map((job) => (
          <div key={job.id} className="card" style={{ padding: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              {/* Product Image */}
              <div style={{ 
                width: 80, 
                height: 80, 
                borderRadius: 8, 
                background: "#f5f5f5",
                backgroundImage: `url(${job.productImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0
              }} />
              
              {/* Job Details */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{job.productTitle}</h3>
                  <div style={{
                    background: getStatusColor(job.status),
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 600
                  }}>
                    {getStatusText(job.status)}
                  </div>
                </div>

                <div style={{ display: "grid", gap: 6, marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
                    <User size={14} style={{ color: "#6b7280" }} />
                    <span style={{ color: "#6b7280" }}>From: {job.sellerName}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
                    <User size={14} style={{ color: "#6b7280" }} />
                    <span style={{ color: "#6b7280" }}>To: {job.buyerName}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
                    <MapPin size={14} style={{ color: "#6b7280" }} />
                    <span style={{ color: "#6b7280" }}>{job.distance}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
                    <Clock size={14} style={{ color: "#6b7280" }} />
                    <span style={{ color: "#6b7280" }}>{job.timeLimit}</span>
                  </div>
                </div>

                {/* Budget */}
                <div style={{ 
                  background: "#f8fafc", 
                  padding: 12, 
                  borderRadius: 8, 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: 12
                }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>Delivery Budget</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#2196f3" }}>
                      ₦{job.budget.toLocaleString()}
                    </div>
                  </div>
                  {job.status === "available" && (
                    <button
                      onClick={() => handleAcceptJob(job.id)}
                      style={{
                        background: "#2196f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "8px 16px",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <CheckCircle size={16} />
                      Accept
                    </button>
                  )}
                </div>

                {/* Notes */}
                {job.notes && (
                  <div style={{ 
                    background: "#fff3cd", 
                    border: "1px solid #ffeaa7", 
                    padding: 8, 
                    borderRadius: 6,
                    fontSize: 12,
                    color: "#856404"
                  }}>
                    <strong>Note:</strong> {job.notes}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {((activeTab === "available" ? availableJobs : myDeliveries).length === 0) && (
        <div className="card" style={{ padding: 32, textAlign: "center" }}>
          <Package size={48} style={{ color: "#6b7280", margin: "0 auto 16px auto" }} />
          <h3 style={{ margin: "0 0 8px 0", color: "#374151" }}>
            {activeTab === "available" ? "No Available Jobs" : "No Active Deliveries"}
          </h3>
          <p style={{ color: "#6b7280", margin: 0 }}>
            {activeTab === "available" 
              ? "Check back later for new delivery opportunities" 
              : "Accept some delivery jobs to get started"
            }
          </p>
        </div>
      )}
    </section>
  );
}


