import { useState } from 'react'
import { Form, Input, Button, message as antdMessage } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { sendContactMessage } from '@/features/contact/services/emailService'

export function ContactForm() {
  const [form] = Form.useForm()
  const [sending, setSending] = useState(false)

  const handleSubmit = async (values) => {
    setSending(true)
    try {
      await sendContactMessage(values)
      antdMessage.success("Message sent! I'll get back to you soon.")
      form.resetFields()
    } catch (err) {
      antdMessage.error(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} className="w-full">
      <div className="grid sm:grid-cols-2 gap-4">
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
          className="mb-4"
        >
          <Input size="large" placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Enter a valid email address' },
          ]}
          className="mb-4"
        >
          <Input size="large" placeholder="Enter your email address" />
        </Form.Item>
      </div>

      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please write your message' }]}
      >
        <Input.TextArea rows={7} placeholder="Write your message" />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        loading={sending}
        icon={<SendOutlined />}
        className="!rounded-full !h-auto !py-2.5 !px-6"
      >
        {sending ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  )
}
