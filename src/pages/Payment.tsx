import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { toast } = useToast();

  if (!course) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Course Not Found
          </h1>
          <Link to="/courses">
            <Button className="bg-primary text-primary-foreground hover:glow-primary">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handlePayment = (method: string) => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      toast({
        title: "Payment Successful!",
        description: `You've successfully enrolled in ${course.title}`,
      });
    }, 1500);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Payment Successful!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              You've successfully enrolled in <strong>{course.title}</strong>.
              Check your email for course access details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Browse More Courses
                </Button>
              </Link>
              <Link to="/">
                <Button className="bg-primary text-primary-foreground hover:glow-primary">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to={`/course/${course.id}`}>
          <Button
            variant="outline"
            className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-8"
            >
              <h1 className="text-3xl font-bold mb-2 text-gradient">
                Complete Your Payment
              </h1>
              <p className="text-muted-foreground mb-8">
                Choose your preferred payment method
              </p>

              <Tabs defaultValue="khalti" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="khalti">Khalti</TabsTrigger>
                  <TabsTrigger value="esewa">eSewa</TabsTrigger>
                  <TabsTrigger value="ime">IME Pay</TabsTrigger>
                  <TabsTrigger value="stripe">Stripe</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                </TabsList>

                {/* Khalti */}
                <TabsContent value="khalti">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🟣</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Pay with Khalti
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="khalti-mobile">Mobile Number</Label>
                        <Input
                          id="khalti-mobile"
                          placeholder="98XXXXXXXX"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="khalti-pin">PIN</Label>
                        <Input
                          id="khalti-pin"
                          type="password"
                          placeholder="Enter PIN"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => handlePayment("Khalti")}
                      className="w-full bg-primary text-primary-foreground hover:glow-primary mt-6"
                    >
                      Pay {course.price}
                    </Button>
                  </div>
                </TabsContent>

                {/* eSewa */}
                <TabsContent value="esewa">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🟢</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Pay with eSewa
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="esewa-id">eSewa ID</Label>
                        <Input
                          id="esewa-id"
                          placeholder="Enter eSewa ID"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="esewa-password">Password</Label>
                        <Input
                          id="esewa-password"
                          type="password"
                          placeholder="Enter Password"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => handlePayment("eSewa")}
                      className="w-full bg-primary text-primary-foreground hover:glow-primary mt-6"
                    >
                      Pay {course.price}
                    </Button>
                  </div>
                </TabsContent>

                {/* IME Pay */}
                <TabsContent value="ime">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🔵</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Pay with IME Pay
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="ime-mobile">Mobile Number</Label>
                        <Input
                          id="ime-mobile"
                          placeholder="98XXXXXXXX"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="ime-mpin">MPIN</Label>
                        <Input
                          id="ime-mpin"
                          type="password"
                          placeholder="Enter MPIN"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => handlePayment("IME Pay")}
                      className="w-full bg-primary text-primary-foreground hover:glow-primary mt-6"
                    >
                      Pay {course.price}
                    </Button>
                  </div>
                </TabsContent>

                {/* Stripe */}
                <TabsContent value="stripe">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">💳</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Pay with Card
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          className="bg-background"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="bg-background"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handlePayment("Stripe")}
                      className="w-full bg-primary text-primary-foreground hover:glow-primary mt-6"
                    >
                      Pay {course.price}
                    </Button>
                  </div>
                </TabsContent>

                {/* PayPal */}
                <TabsContent value="paypal">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">💙</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Pay with PayPal
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="paypal-email">PayPal Email</Label>
                        <Input
                          id="paypal-email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="paypal-password">Password</Label>
                        <Input
                          id="paypal-password"
                          type="password"
                          placeholder="Enter Password"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => handlePayment("PayPal")}
                      className="w-full bg-primary text-primary-foreground hover:glow-primary mt-6"
                    >
                      Pay {course.price}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-2xl p-6 sticky top-32"
            >
              <h2 className="text-xl font-bold mb-4 text-foreground">
                Order Summary
              </h2>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-foreground mb-2">
                {course.title}
              </h3>
              <div className="border-t border-border my-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Course Price</span>
                  <span className="font-semibold text-foreground">
                    {course.price}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-semibold text-primary">NPR 0</span>
                </div>
                <div className="border-t border-border my-2 pt-2 flex justify-between">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-primary text-xl">
                    {course.price}
                  </span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                <CheckCircle className="w-4 h-4 inline mr-1 text-primary" />
                30-day money-back guarantee
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
