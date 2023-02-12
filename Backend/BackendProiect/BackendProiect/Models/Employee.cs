namespace BackendProiect.Models {
    public class Employee {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int WorkHours { get; set; }
        public string Department { get; set; }
        public float Salary { get; set; }
    }
}
