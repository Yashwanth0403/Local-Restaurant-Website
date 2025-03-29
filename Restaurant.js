< div id="form-result" ></div>

<script>
  const form = document.querySelector("form");
  const result = document.getElementById("form-result");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      result.textContent = "Message sent successfully!";
      form.reset();
    } else {
      result.textContent = "Failed to send message. Please try again.";
    }
  });
</script>